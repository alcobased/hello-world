// server.js

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const ipAdress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.send(`Hello from ${ipAdress}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
