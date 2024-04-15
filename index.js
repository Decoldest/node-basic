import { createServer } from "node:http";
import * as fs from "node:fs";

const server = createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log(`server running`);
});
