// Core Module
const http = require("http");
const fs = require("fs");

// Create Server

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Something is wrong happened");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

// Listener

server.listen(5000, () => {
  console.log("Server is Running");
});
