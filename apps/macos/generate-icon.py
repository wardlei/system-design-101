#!/usr/bin/env python3
from pathlib import Path
import struct
import zlib

ROOT = Path(__file__).resolve().parent
PNG_PATH = ROOT / "AppIcon.png"
SIZE = 1024


def png_chunk(tag: bytes, data: bytes) -> bytes:
    return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)


def pixel(x: int, y: int) -> tuple[int, int, int, int]:
    nx = x / (SIZE - 1)
    ny = y / (SIZE - 1)
    paper = (243, 240, 232)
    green = (50, 92, 80)
    orange = (223, 107, 63)
    ink = (22, 41, 52)

    # Rounded-rect mask
    radius = 180
    ix, iy = x, y
    inside = True
    if ix < radius and iy < radius:
        inside = (ix - radius) ** 2 + (iy - radius) ** 2 <= radius ** 2
    elif ix > SIZE - 1 - radius and iy < radius:
        inside = (ix - (SIZE - 1 - radius)) ** 2 + (iy - radius) ** 2 <= radius ** 2
    elif ix < radius and iy > SIZE - 1 - radius:
        inside = (ix - radius) ** 2 + (iy - (SIZE - 1 - radius)) ** 2 <= radius ** 2
    elif ix > SIZE - 1 - radius and iy > SIZE - 1 - radius:
        inside = (ix - (SIZE - 1 - radius)) ** 2 + (iy - (SIZE - 1 - radius)) ** 2 <= radius ** 2
    if not inside:
        return (0, 0, 0, 0)

    t = 0.18 + 0.55 * ny + 0.12 * nx
    r = int(paper[0] * (1 - t) + green[0] * t)
    g = int(paper[1] * (1 - t) + green[1] * t)
    b = int(paper[2] * (1 - t) + green[2] * t)

    # Orbit rings
    cx, cy = 512, 470
    d1 = ((x - cx) ** 2 / (1.35 ** 2) + (y - cy) ** 2) ** 0.5
    d2 = ((x - (cx + 40)) ** 2 + (y - cy) ** 2 / (1.28 ** 2)) ** 0.5
    if abs(d1 - 310) < 8:
        r, g, b = 195, 190, 180
    if abs(d2 - 250) < 7:
        r, g, b = orange

    # Core circle
    core = ((x - cx) ** 2 + (y - (cy + 8)) ** 2) ** 0.5
    if core <= 118:
        r, g, b = green
        if abs(x - cx) < 8 and 412 < y < 528:
            r, g, b = 243, 228, 207
        if abs(y - 470) < 8 and 454 < x < 570:
            r, g, b = 243, 228, 207

    # SD mark
    if 430 <= x <= 594 and 620 <= y <= 760:
        if 430 <= x <= 454 or 570 <= x <= 594 or (y <= 644 and 430 <= x <= 594) or (y >= 736 and 430 <= x <= 594):
            r, g, b = ink
        if 470 <= x <= 554 and 668 <= y <= 712:
            r, g, b = 245, 183, 142

    return (r, g, b, 255)


def write_png() -> None:
    raw = bytearray()
    for y in range(SIZE):
        raw.append(0)
        for x in range(SIZE):
            raw.extend(pixel(x, y))
    ihdr = struct.pack(">IIBBBBB", SIZE, SIZE, 8, 6, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n" + png_chunk(b"IHDR", ihdr) + png_chunk(b"IDAT", zlib.compress(bytes(raw), 9)) + png_chunk(b"IEND", b"")
    PNG_PATH.write_bytes(png)


if __name__ == "__main__":
    write_png()
    print(f"wrote {PNG_PATH}")
