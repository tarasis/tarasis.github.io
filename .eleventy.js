const { EleventyRenderPlugin } = require("@11ty/eleventy");
const Image = require("@11ty/eleventy-img");
const CleanCSS = require("clean-css");

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

    // FILTERS
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // PLUGINS
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    // SHORTCODES
    // eleventyConfig.addShortcode("image", imageShortcode);
    eleventyConfig.addAsyncShortcode("imageGen", officialImageShortcode);
    eleventyConfig.addNunjucksShortcode("imageGenSync", imageShortcodeSync);
    // eleventyConfig.addShortcode("imageGenSync", imageShortcodeSync);

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

const imageShortcode = async (
    src,
    alt,
    className = undefined,
    widths = [400, 800, 1280],
    formats = ["webp", "jpeg"],
    sizes = "100vw"
) => {
    const imageMetadata = await Image(src, {
        widths: [...widths, null],
        formats: [...formats, null],
        outputDir: "_site/assets/images",
        urlPath: "/assets/images",
    });

    const sourceHtmlString = Object.values(imageMetadata)
        // Map each format to the source HTML markup
        .map((images) => {
            // The first entry is representative of all the others
            // since they each have the same shape
            const { sourceType } = images[0];

            // Use our util from earlier to make our lives easier
            const sourceAttributes = stringifyAttributes({
                type: sourceType,
                // srcset needs to be a comma-separated attribute
                srcset: images.map((image) => image.srcset).join(", "),
                sizes,
            });

            // Return one <source> per format
            return `<source ${sourceAttributes}>`;
        })
        .join("\n");

    const getLargestImage = (format) => {
        const images = imageMetadata[format];
        return images[images.length - 1];
    };

    const largestUnoptimizedImg = getLargestImage(formats[0]);
    const imgAttributes = stringifyAttributes({
        src: largestUnoptimizedImg.url,
        width: largestUnoptimizedImg.width,
        height: largestUnoptimizedImg.height,
        alt,
        loading: "lazy",
        decoding: "async",
    });
    const imgHtmlString = `<img ${imgAttributes}>`;

    const pictureAttributes = stringifyAttributes({
        class: className,
    });
    const picture = `<picture ${pictureAttributes}>
    ${sourceHtmlString}
    ${imgHtmlString}
  </picture>`;

    return outdent`${picture}`;
};

async function officialImageShortcode(src, alt, sizes = "100vw") {
    if (alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    if (src.startsWith("/screenshots")) {
        src = "./src/" + src;
    } else {
        src = "./projects/" + src;
    }

    console.log("officalImage: " + src + " " + alt);

    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["webp", "jpeg"],
        outputDir: "www/assets/images",
        urlPath: "/assets/images",
    });

    console.log(metadata);

    let lowsrc = metadata.jpeg[0];
    let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

    return `<picture>
      ${Object.values(metadata)
          .map((imageFormat) => {
              return `  <source type="${
                  imageFormat[0].sourceType
              }" srcset="${imageFormat
                  .map((entry) => entry.srcset)
                  .join(", ")}" sizes="${sizes}">`;
          })
          .join("\n")}
        <img
          src="${lowsrc.url}"
          width="${highsrc.width}"
          height="${highsrc.height}"
          alt="${alt}"
          class="card__img"
          loading="lazy"
          decoding="async">
      </picture>`;
}

function imageShortcodeSync(
    src,
    alt,
    sizes = "100vw",
    widths = [300, 600],
    cls = "card__img"
) {
    let options = {
        widths: widths,
        formats: ["webp", "jpeg"],
        outputDir: "www/assets/images",
        urlPath: "/assets/images",
    };

    if (src.startsWith("/screenshots")) {
        src = "./src/" + src;
    } else {
        src = "./projects/" + src;
    }

    // console.log("Sync: " + src + " " + alt);
    // generate images, while this is async we don’t wait
    Image(src, options);

    let imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };
    // get metadata even if the images are not fully generated yet
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
}
