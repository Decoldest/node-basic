import { createServer } from "node:http";
import * as fs from "node:fs";

const server = createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("contact-me.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      if (err) throw err;
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log(`server running`);
});
