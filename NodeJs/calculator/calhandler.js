const { sum } = require("./sum");

const requestHandler = (req, res) => {
  if (req.url.toLowerCase() === "/calculator" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Simple Calculator</h1>
          <form action="/calculate-sum" method="POST">
            <input type="text" placeholder="First number" name="first" />
            <input type="text" placeholder="Second number" name="second" />
            <input type="submit" value="Sum" />
          </form>
        </body>
      </html>
    `);
  } else if (
    req.url.toLowerCase() === "/calculate-sum" &&
    req.method === "POST"
  ) {
    return sum(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head><title>404 Not Found</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
  }
};

exports.requestHandler = requestHandler;
