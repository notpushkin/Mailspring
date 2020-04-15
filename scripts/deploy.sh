#!/bin/bash

shopt -s nullglob
cd app/dist/
for f in *.{dmg,zip,deb,rpm}; do
  curl -F "fileToUpload=@$f" -F 'reqtype=fileupload' 'https://catbox.moe/user/api.php'
  printf "\n"
done
