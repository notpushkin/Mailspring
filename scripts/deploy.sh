#!/bin/bash

shopt -s nullglob
cd app/dist/
ls
for f in *.{dmg,zip,deb,rpm,msi,exe}; do
  curl -F "file=@$f" https://files.mailspringlibre.org
  printf "\n"
done
