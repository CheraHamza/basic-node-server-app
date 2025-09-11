import fs from "node:fs/promises";

import express from "express";
const app = express();

async function readFile(filename) {
	try {
		const data = await fs.readFile(filename, "utf8");
		return data;
	} catch (err) {
		console.error(err);
	}
}

let filepath = "";

app.get("/", async (req, res) => {
	filepath = "pages/index.html";

	const html = await readFile(filepath);
	res.send(html);
});

app.get("/about", async (req, res) => {
	filepath = "pages/about.html";

	const html = await readFile(filepath);
	res.send(html);
});

app.get("/contact-me", async (req, res) => {
	filepath = "pages/contact-me.html";

	const html = await readFile(filepath);
	res.send(html);
});

app.get(/\/*/, async (req, res) => {
	filepath = "pages/404.html";

	const html = await readFile(filepath);
	res.send(html);
});

const PORT = 8000;

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}

	console.log(`Server listening on port ${PORT}...`);
});
