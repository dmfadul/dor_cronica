module.exports = function (eleventyConfig) {
  // Pass-through for your global stylesheet and any future assets
  eleventyConfig.addPassthroughCopy("styles.css");
  //eleventyConfig.addPassthroughCopy({"assets": "assets"}); // create later if needed

  return {
    dir: {
      input: ".",           // project root
      includes: "_includes",
      data: "_data",        // optional (only if you add a _data dir)
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
