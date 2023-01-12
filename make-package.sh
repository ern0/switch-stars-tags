#!/bin/bash
set -e

rm -rf *.crx
rm -rf switch-stars-tags.zip

chrome \
	--pack-extension=extension \
	--pack-extension-key=switch-stars-tags.pem \
	--no-message-box

mv extension.crx switch-stars-tags.crx

cd extension
7z a ../switch-stars-tags.zip manifest.json ../switch-stars-tags.crx image script
cd ..
rm -rf manifest.json