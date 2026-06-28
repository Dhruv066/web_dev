const sum = (req, res) => {
  console.log("in sum request handler", req.url);
  const body = [];

  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);

    console.log("Sum result:", result);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Sum is ${result}</h1>`);
  });
};

exports.sum = sum;
