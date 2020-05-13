const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		main: ["./src/js/main.js", "./src/css/styles.css"],
	},
	output: {
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					"postcss-loader",
				],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			hash: true,
			template: "src/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
	],
};
