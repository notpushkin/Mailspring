#!/bin/bash

shopt -s nullglob
cd app/dist/
ls
for f in *.{dmg,zip,deb,rpm,msi}; do
  curl -F "fileToUpload=@$f" -F 'reqtype=fileupload' 'https://catbox.moe/user/api.php'
  printf "\n"
done
