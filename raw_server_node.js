// Core Module
const http = require("http");

// Create raw server
const server = http.createServer((req, res) => {
  res.end("Hello Node.js");
});

// port
const PORT = 5000;
server.listen(PORT, () => {
  console.log("server is running");
});
