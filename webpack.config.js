const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		main: ["./src/js/main.js", "./src/css/styles.css"],
	},
	mode: "development",
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
		new HTMLWebpackPlugin({
			hash: true,
			template: "src/error.html",
			filename: "error.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
		proxy: {
			"/downloads": "http://localhost:8000",
		},
	},
};
