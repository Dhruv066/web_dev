const http = require('http');
const {requestHandler}= require("./calhandler")
const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server Ruunning on the address http://localhost:${PORT}`);

});