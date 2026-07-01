const express = require('express');
const path = require('path');
const userRouter = express.Router();
// const path = require("path");

const rootDir = require('../utils/pathUtil');

userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir, "/views/home.html"));
    });
userRouter.get("/homeAdded", (req, res, next) => {
  res.sendFile(path.join(rootDir, "/views/homeAdded.html"));
});

module.exports = userRouter;