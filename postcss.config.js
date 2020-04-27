const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
	plugins: [
		tailwindcss("./tailwind.config.js"),
		purgecss({
			content: ["./src/**/*.html"],
			defaultExtractor: (content) =>
				content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
		cssnano({
			preset: "default",
		}),
		require("autoprefixer"),
	],
};
