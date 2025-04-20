import { createServer } from "node:http";
const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello habert  ");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server Listening on port 127.0.0.1:3000");
});
