const express = require("express");
const app = express();
const path = require("path");

app.get("/downloads/:file(*)", (req, res) => {
	const file = req.params.file;
	const fileLocation = path.join("./uploads", file);

	res.download(fileLocation, file);
});

app.listen(8000, () => {
	console.log("App is running at localhost:8000");
});
