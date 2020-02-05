#!/bin/bash

shopt -s nullglob
cd app/dist/
for f in *.{dmg,zip,deb,rpm}; do
  curl --upload-file "$f" "https://transfer.sh/$f"
  printf "\n"
done