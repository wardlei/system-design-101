#!/usr/bin/env python3
"""Build a Chinese EPUB from data/guides-zh organized by data/categories-zh."""
import hashlib
import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CATEGORIES_DIR = ROOT / "data" / "categories-zh"
GUIDES_DIR = ROOT / "data" / "guides-zh"
BUILD_DIR = ROOT / "build" / "epub"
IMAGES_DIR = BUILD_DIR / "images"
BOOK_MD = BUILD_DIR / "book.md"
OUTPUT = ROOT / "dist" / "System-Design-101-zh.epub"

BOOK_TITLE = "系统设计 101（中文版）"
BOOK_AUTHOR = "ByteByteGo"


def parse_front_matter(text: str):
    """Return (data_dict, body) from a markdown file with YAML front matter."""
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.DOTALL)
    if not m:
        return {}, text
    raw, body = m.group(1), m.group(2)
    data = {}
    active = None
    for line in raw.split("\n"):
        item = re.match(r"^\s+-\s+[\"']?(.*?)[\"']?\s*$", line)
        if item and active is not None:
            data.setdefault(active, []).append(item.group(1))
            continue
        field = re.match(r"^([\w]+):\s*(.*)$", line)
        if not field:
            continue
        key, val = field.group(1), field.group(2).strip()
        if not val:
            active = key
            data[key] = []
        else:
            active = None
            data[key] = val.strip("\"'")
    return data, body.strip()


def download(url: str, images_dir: Path) -> str:
    """Download image keyed by URL hash; reuse existing file; fall back to URL."""
    ext = os.path.splitext(url.split("?")[0])[1]
    if ext.lower() not in (".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"):
        ext = ".png"
    digest = hashlib.sha1(url.encode("utf-8")).hexdigest()[:16]
    fname = f"{digest}{ext.lower()}"
    dest = images_dir / fname
    if dest.exists() and dest.stat().st_size > 0:
        return f"images/{fname}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        if not data:
            return url
        dest.write_bytes(data)
        return f"images/{fname}"
    except Exception:
        return url


def collect_categories():
    cats = []
    for f in sorted(CATEGORIES_DIR.glob("*.md")):
        data, _ = parse_front_matter(f.read_text(encoding="utf-8"))
        cats.append({
            "id": f.stem,
            "title": data.get("title", f.stem),
            "sort": int(data.get("sort", 0)),
        })
    cats.sort(key=lambda c: c["sort"])
    return cats


def collect_guides():
    guides = []
    for f in sorted(GUIDES_DIR.glob("*.md")):
        data, body = parse_front_matter(f.read_text(encoding="utf-8"))
        if data.get("draft") == "true":
            continue
        cats = data.get("categories", [])
        guides.append({
            "file": f.name,
            "title": data.get("title", f.stem),
            "description": data.get("description", ""),
            "categories": cats if isinstance(cats, list) else [],
            "body": body,
        })
    return guides


def main():
    cats = collect_categories()
    guides = collect_guides()

    # group guides by their first category
    by_cat = {c["id"]: [] for c in cats}
    uncategorized = []
    for g in guides:
        placed = False
        for cid in g["categories"]:
            if cid in by_cat:
                by_cat[cid].append(g)
                placed = True
                break
        if not placed:
            uncategorized.append(g)

    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    BUILD_DIR.mkdir(parents=True, exist_ok=True)

    lines = []
    lines.append(f"% {BOOK_TITLE}")
    lines.append(f"% {BOOK_AUTHOR}")
    lines.append("")
    lines.append("# 前言")
    lines.append("")
    lines.append("本书收录了系统设计入门（System Design 101）的 400 篇核心文章，按主题分为 15 个章节，以中文呈现，帮助读者理解复杂系统背后的原理、取舍与真实案例。")
    lines.append("")
    lines.append("\\newpage")
    lines.append("")

    for cat in cats:
        lines.append(f"# {cat['title']}")
        lines.append("")
        members = by_cat[cat["id"]]
        if not members:
            continue
        for g in members:
            lines.append(f"## {g['title']}")
            lines.append("")
            if g["description"]:
                lines.append(f"*{g['description']}*")
                lines.append("")
            body = g["body"]

            def repl(m):
                url = m.group(1)
                if url.startswith("http"):
                    return f"![]({download(url, IMAGES_DIR)})"
                return m.group(0)

            body = re.sub(r"!\[[^\]]*\]\(([^)]+)\)", repl, body)
            lines.append(body)
            lines.append("")
            lines.append("\\newpage")
            lines.append("")

    if uncategorized:
        lines.append("# 未分类")
        lines.append("")
        for g in uncategorized:
            lines.append(f"## {g['title']}")
            lines.append("")
            lines.append(g["body"])
            lines.append("")

    BOOK_MD.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {BOOK_MD}")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    os.makedirs(OUTPUT.parent, exist_ok=True)
    cmd = [
        "pandoc",
        str(BOOK_MD),
        "--from", "markdown+smart",
        "--to", "epub3",
        "--toc",
        "--toc-depth=2",
        "--metadata", f"title={BOOK_TITLE}",
        "--metadata", f"author={BOOK_AUTHOR}",
        "--metadata", "lang=zh-CN",
        "--metadata", "toc-title=目录",
        "--resource-path", str(BUILD_DIR),
        "-o", str(OUTPUT),
    ]
    print("running:", " ".join(f"'{c}'" if " " in c else c for c in cmd))
    rc = subprocess.call(cmd)
    if rc != 0:
        print("pandoc failed", file=sys.stderr)
        sys.exit(rc)
    size = OUTPUT.stat().st_size
    print(f"built: {OUTPUT} ({size/1024/1024:.1f} MB)")
    localize_nav(OUTPUT)


def localize_nav(epub_path: Path):
    """Replace pandoc's English nav labels with Chinese (keeps mimetype first, stored)."""
    import zipfile

    tmp = epub_path.with_suffix(".tmp.epub")
    with zipfile.ZipFile(epub_path) as zin, zipfile.ZipFile(tmp, "w") as zout:
        names = zin.namelist()
        # mimetype must be the first entry and stored uncompressed
        if "mimetype" in names:
            zout.writestr(
                zipfile.ZipInfo("mimetype"),
                zin.read("mimetype"),
                compress_type=zipfile.ZIP_STORED,
            )
        for name in names:
            if name == "mimetype":
                continue
            data = zin.read(name)
            if name.endswith("nav.xhtml"):
                text = data.decode("utf-8")
                text = text.replace(">Title Page<", ">封面<").replace(
                    ">Table of Contents<", ">目录<"
                )
                data = text.encode("utf-8")
            zout.writestr(name, data, compress_type=zipfile.ZIP_DEFLATED)
    tmp.replace(epub_path)
    print("localized nav labels")


if __name__ == "__main__":
    main()
