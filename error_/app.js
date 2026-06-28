const http = require("http");
const { requestHandler } = require("./syntaxt");
const server = http.createServer(requestHandler);

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server Ruunning on the address http://localhost:${PORT}`);
});
