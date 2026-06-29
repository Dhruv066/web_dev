const fs = require("fs");
const http = require("http");
const express= require('express')
const requestHandler = require("./user");

const app = express();

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
