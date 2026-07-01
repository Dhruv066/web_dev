const fs = require("fs");
// const http = require("http");
const express= require('express')
const requestHandler = require("./user");

const app = express();
app.use("/",(req, res, next) => {
  console.log("In the  first middleware!");
  next();
});
app.use("/submit-details",(req, res, next) => {
  console.log("In the  second middleware!");
  res.send("<h1>Hello from Express!</h1>");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
