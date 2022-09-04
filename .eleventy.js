const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/svgs");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/screenshots");
    eleventyConfig.addPassthroughCopy({
        "./projects/freeCodeCamp": "freeCodeCamp",
    });
    eleventyConfig.addPassthroughCopy({
        "./projects/FrontendMentor": "FrontendMentor",
    });
    eleventyConfig.addPassthroughCopy({
        "./projects/random": "others",
    });
    eleventyConfig.addPassthroughCopy({
        "./projects/devchallenges": "devchallenges",
    });
    eleventyConfig.addPassthroughCopy({
        "./src/assets/faviconstuff": "/",
    });

    //eleventyConfig.addPassthroughCopy({
    //    "./src/assets/images": "img",
    //});

    // PLUGINS
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    // WATCH Targets
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addWatchTarget("./src/js/");

    // Return your Object options:
    return {
        // markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "www",
            // ⚠️ These values are relative to the input directory.
            // 📝 _includes is a default value, as is _data but I like them
            //      visible here as a reminder 🤷
            includes: "_includes",
            // done to shorten the frontmater so layout: base
            // rather than layout: layouts/base
            layouts: "_includes/layouts",
            data: "_data",
        },
    };
};
