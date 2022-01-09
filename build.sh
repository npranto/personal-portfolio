# remove dist directory
rm -rf ./dist

# create dist directory 
mkdir ./dist

# copy assets
cp -r ./assets ./dist

# copy vendor
cp ./vendor/tailwind/output.css ./dist/vendor/tailwind/output.css

# copy scripts
cp -r ./scripts ./dist

# copy styles
cp -r ./styles ./dist

# copy index.html
cp ./index.html ./dist
