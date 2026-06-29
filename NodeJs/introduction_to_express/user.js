const fs = require("fs");
const http = require("http");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html><head><title>Dhruv Maurya</title></head>");
    res.write("<body><h1>Hello everyone, I am Dhruv Maurya</h1>");
    res.write("<h2>Enter your details</h2>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<label for='Name'>Name</label>");
    res.write("<input  type='text' id='name' name='name'></input>");
    res.write("<label for='Male'>Male</label>");
    res.write(
      "<input ' type='radio' id='Male'name='gender' value='male'></input>",
    );
    res.write("<label for='female'>Female</label>");
    res.write(
      "<input  type='radio' id='Female' name='gender' value='female'></input>",
    );
    res.write("<input type='submit' value='Submit'>");

    res.write("</form>");

    res.write("</body></html>");
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      const jsonObject = {};
      for (const [key, value] of params.entries()) {
        jsonObject[key] = value;
      }
      const jsonString = JSON.stringify(jsonObject);
      console.log(jsonObject);
      fs.writeFileSync(__dirname + "/output.txt", jsonString);
    });

    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  } else {
    res.setHeader("content-type", "text/html");
    res.write("<html><head><title>Dhruv Maurya</title></head>");
    res.write("<body><h1>you need to dance</h1></body></html>");
    res.end();
  }
};

module.exports = requestHandler;
