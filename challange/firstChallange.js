// Core Module
const http = require("http");

// Server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "text/html");
    res.write("<h1>hello this is first data</h1>");
  }
});

// Listener
server.listen(5000, () => {
  console.log("Server is running at: 5000");
});
