import http from "node:http";
import fs from "node:fs/promises";

async function readFile(filename) {
	try {
		const data = await fs.readFile(filename, "utf8");
		return data;
	} catch (err) {
		console.error(err);
	}
}

const server = http.createServer();

server.on("request", async (request, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");

	let filepath = "";
	switch (request.url) {
		case "/":
			filepath = "pages/index.html";
			break;

		case "/about":
			filepath = "pages/about.html";
			break;

		case "/contact-me":
			filepath = "pages/contact-me.html";
			break;

		default:
			filepath = "pages/404.html";
			break;
	}

	const html = await readFile(filepath);
	res.end(html);
});

server.listen(8000, () => {
	console.log("server running at localhost:8000/ ...");
});
