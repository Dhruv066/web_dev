const fs = require('fs');
const http = require("http");
const requestHandler = require('./parsing_request');
const server = http.createServer(requestHandler);






const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})