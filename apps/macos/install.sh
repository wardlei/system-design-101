#!/bin/zsh
set -euo pipefail

source_dir="${0:A:h}"
repo_root="${source_dir:h:h}"
source_app="${1:-$repo_root/dist/macos/System Design Atlas.app}"
target_app="${2:-$HOME/Applications/System Design Atlas.app}"

if [[ ! -d "$source_app" ]]; then
  print -u2 "macOS app artifact not found: $source_app"
  exit 1
fi

mkdir -p "${target_app:h}"
rm -rf "$target_app"
ditto "$source_app" "$target_app"
codesign --verify --strict "$target_app"
print "installed: $target_app"
