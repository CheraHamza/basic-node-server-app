import { fileURLToPath } from "node:url";
import path from "node:path";

import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

let filepath = "";

const options = { root: path.join(__dirname, "pages") };

app.get("/", (req, res) => {
	filepath = "index.html";

	res.sendFile(filepath, options, (err) => {
		if (err) {
			throw err;
		}
	});
});

app.get("/about", (req, res) => {
	filepath = "about.html";

	res.sendFile(filepath, options, (err) => {
		if (err) {
			throw err;
		}
	});
});

app.get("/contact-me", (req, res) => {
	filepath = "contact-me.html";

	res.sendFile(filepath, options, (err) => {
		if (err) {
			throw err;
		}
	});
});

app.get(/\/*/, (req, res) => {
	filepath = "404.html";

	res.sendFile(filepath, options, (err) => {
		if (err) {
			throw err;
		}
	});
});

const PORT = 8000;

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}

	console.log(`Server listening on port ${PORT}...`);
});
