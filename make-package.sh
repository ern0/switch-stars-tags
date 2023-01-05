#!/bin/bash
set -e

rm -rf *.crx
rm -rf switch-star-tags.zip

chrome \
	--pack-extension=extension \
	--pack-extension-key=switch-star-tags.pem \
	--no-message-box

mv extension.crx switch-star-tags.crx

cd extension
7z a ../switch-star-tags.zip manifest.json ../switch-star-tags.crx image script
cd ..
rm -rf manifest.json