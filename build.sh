# remove dist directory
rm -rf ./dist

# create dist directory 
mkdir ./dist

# copy assets
cp -r ./assets ./dist

# copy vendor
cp -r ./vendor ./dist

# copy scripts
cp -r ./scripts ./dist

# copy styles
cp -r ./styles ./dist

# copy index.html
cp ./index.html ./dist
