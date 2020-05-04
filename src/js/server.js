const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

/**
 * Download route for PDF
 */
app.get("/downloads/:file(*)", (req, res, next) => {
	const file = req.params.file;
	const fileLocation = path.join("./uploads", file);

	res.download(fileLocation, file);
});

/**
 * Route to handle 404s
 */
app.use((req, res, next) => {
	const error = new Error("File not found...");
	error.status = 404;
	next(error);
});

/**
 * Route to catch any other errors
 * and redirect to static page
 */
app.use((error, req, res, next) => {
	console.error(error);
	res.redirect("/error.html");
});

/**
 * Listening on port 8000
 */
app.listen(port, () => {
	console.log(`Application listening on port:${port}`);
});
