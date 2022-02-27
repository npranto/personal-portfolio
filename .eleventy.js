module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/scripts');
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/vendor');
  eleventyConfig.addPassthroughCopy('./src/manifest.webmanifest');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
