# reset dist directory
rm -rf ./dist # remove dist directory
mkdir ./dist # create dist directory 

# copy assets
cp -r ./assets ./dist

# copy vendor
cp -r ./vendor ./dist
# remove unused tailwind output files
rm -rf ./dist/vendor/tailwind/input.css
rm -rf ./dist/vendor/tailwind/tailwind.config.js 

# copy scripts
cp -r ./scripts ./dist

# copy styles
cp -r ./styles ./dist

# copy index.html
cp ./index.html ./dist
