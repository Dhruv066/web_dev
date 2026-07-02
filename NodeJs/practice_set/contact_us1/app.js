const express = require('express');

const app = express();

app.use("/", (req, res, next) => {
    console.log('In the first middleware!');
    next();
});


app.use("/", (req, res, next) => {
  console.log("In the second middleware!");
  next();
});

// app.use("/", (req, res, next) => {
//   console.log("In the first middleware!");
//   res.send("<h1>Hello from Express!</h1>");
// });


app.use("/", (req, res, next) => {
  console.log("In the third middleware!");
  next();
});
// app.use( (req, res, next) => {
//    res.send("<h1>Hello from Express!</h1>");
// });
app.get("/", (req, res, next) => {
//   console.log("this is home page");
  res.send("<h1>Welcome to the Home Page!</h1>");
  
});

app.get("/contact", (req, res, next) => {
//   console.log("we will contact you soon");
    res.send("<h1>Contact you soon!</h1>");
  
});


app.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
});