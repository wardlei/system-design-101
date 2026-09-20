#!/bin/zsh
set -euo pipefail

source_dir="${0:A:h}"
repo_root="${source_dir:h:h}"
output_root="${1:-$repo_root/dist/macos}"
app_dir="$output_root/System Design Atlas.app"
macos_dir="$app_dir/Contents/MacOS"
resources_dir="$app_dir/Contents/Resources"

cd "$repo_root"
npm run build

python3 "$source_dir/generate-icon.py"
iconset="$source_dir/AppIcon.iconset"
rm -rf "$iconset"
mkdir -p "$iconset"
while IFS='|' read -r size name; do
  sips -z "$size" "$size" "$source_dir/AppIcon.png" --out "$iconset/$name" >/dev/null
done <<'EOF'
16|icon_16x16.png
32|icon_16x16@2x.png
32|icon_32x32.png
64|icon_32x32@2x.png
128|icon_128x128.png
256|icon_128x128@2x.png
256|icon_256x256.png
512|icon_256x256@2x.png
512|icon_512x512.png
1024|icon_512x512@2x.png
EOF
iconutil -c icns "$iconset" -o "$source_dir/AppIcon.icns"

mkdir -p "$macos_dir" "$resources_dir/web"
swiftc -O \
  -o "$macos_dir/system-design-atlas" \
  "$source_dir/main.swift" \
  -framework AppKit \
  -framework Network \
  -framework WebKit
cp "$source_dir/Info.plist" "$app_dir/Contents/Info.plist"
cp "$source_dir/AppIcon.icns" "$resources_dir/AppIcon.icns"
ditto "$repo_root/dist" "$resources_dir/web"
chmod +x "$macos_dir/system-design-atlas"
codesign --force --sign - "$app_dir"
print "built: $app_dir"
