const express = require("express");
const jwt = require("jsonwebtoken");
const url = require("url");
const querystring = require("querystring");
const http = require("http");

// Configuration
const host = "0.0.0.0";
const port = process.env.PORT || 8008;
const JWT_SECRET_KEY = "dummy_private_key_for_testing"; // Dummy private key for JWT signing

// Initialize Express app
const app = express();

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to set the request time for each request
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

// Mock OAuth /oauth/token endpoint for testing purposes
app.post("/oauth/token", (req, res) => {
  const { grant_type, client_id, client_secret } = req.body;
  console.log(
    `\n[${req.requestTime.toISOString()}] POST /oauth/token endpoint called`
  );

  if (grant_type !== "client_credentials") {
    return res.status(400).json({
      error: "unsupported_grant_type",
      error_description: "Only client_credentials grant type is supported",
    });
  }

  const tokenPayload = { client_id };
  const accessToken = jwt.sign(tokenPayload, JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  return res.status(200).json({
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: 3600,
  });
});

// Route to handle all incoming requests
app.all("*", (req, res) => {
  const uri = url.parse(req.url, true);
  const queryParams = querystring.parse(uri.query);
  const status = queryParams.status || 200;

  console.log(
    `\n[${req.requestTime.toISOString()}] Received ${req.method} request for: ${
      req.url
    }`
  );
  console.log("> Headers:", req.headers);
  console.log("> Request Body:", req.body || "No Body");

  const responseBody = {
    method: req.method,
    path: uri.pathname,
    headers: req.headers,
    query: queryParams,
    body: req.body || null,
  };

  res.status(status).json(responseBody);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(
    `[${new Date().toISOString()}] Error handling request:`,
    err.message
  );
  res.status(500).json({ error: "Internal Server Error" });
});

// Create an HTTP server to mimic the behavior of app.js
const server = http.createServer((req, res) => {
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    let bodyString = Buffer.concat(body).toString();
    console.log(bodyString);
    res.end(bodyString);
  });
  req.on("error", () => {
    res.statusCode = 400;
    res.end();
  });
  res.on("error", (err) => {
    console.error(err);
  });
});

// Start the Express app and HTTP server
app.listen(port, host, () => {
  console.log(
    `[${new Date().toISOString()}] Express server running at http://${host}:${port}`
  );
});

server.listen(port, () => {
  console.log(`HTTP server listening at ${port}`);
});

module.exports = { app, server };
