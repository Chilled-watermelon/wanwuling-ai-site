#!/bin/zsh
set -e
cd "$(dirname "$0")"
echo "打开 http://localhost:8765"
python3 -m http.server 8765
