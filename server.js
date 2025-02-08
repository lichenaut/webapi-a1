const http = require("http");

// Configuration
const host = "0.0.0.0";
const port = process.env.PORT || 8008;

// Create an HTTP echo server
const server = http.createServer((req, res) => {
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    let bodyString = Buffer.concat(body).toString();
    console.log(`Received: ${bodyString}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(bodyString); // Echo back the received data
  });
  req.on("error", () => {
    res.statusCode = 400;
    res.end("Error processing request");
  });
  res.on("error", (err) => {
    console.error(err);
  });
});

// Start the server
server.listen(port, host, () => {
  console.log(`Echo server running at http://${host}:${port}`);
});

module.exports = server;
