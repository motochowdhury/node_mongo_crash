// Core Module
const http = require("http");

// Port
const PORT = 5000;

// Create Server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ name: "moto" }));
    res.end();
  }
});

// Listen

server.listen(PORT, () => {
  console.log(`Server is running at : ${PORT}`);
});
