const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/js/main.js",
	mode: "development",
	output: {
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HTMLWebpackPlugin({
			hash: true,
			template: "src/index.html",
			filename: "index.html",
		}),
	],
};
