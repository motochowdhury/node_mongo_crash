// Core module

const http = require("http");
const url = require("url");

// Create Server

const server = http.createServer((req, res) => {
  const addUrl = "http://localhost:5000/contact?name=moto";
  const parsedUrl = url.parse(addUrl, true);
  console.log(parsedUrl);
});
console.log(url);

// Listener

server.listen(5000);
