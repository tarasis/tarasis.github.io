module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/svgs");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/screenshots");
    //eleventyConfig.addPassthroughCopy({
    //    "./src/assets/images": "img",
    //});

    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "www",
            // ⚠️ These values are both relative to the input directory.
            // 📝 _includes is a default value, as is _data but I like them
            //      visible here as a reminder
            includes: "includes",
            layouts: "layouts",
            data: "data",
        },
    };
};
