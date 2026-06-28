const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("content-type", "text/html");
        res.write("<html><head><title>Dhruv Maurya</title></head>");
        res.write(
          "<body><h1>Hello everyone, I am Dhruv Maurya</h1></body></html>",
        );
        return res.end();
    }else if(req.url==='/products'){
        res.setHeader("content-type", "text/html");
        res.write("<html><head><title>Dhruv Maurya</title></head>");
        res.write(
          "<body><h1>poducts are not available </h1></body></html>",
        );
        return res.end();
    }else{
        res.setHeader("content-type", "text/html");
        res.write("<html><head><title>Dhruv Maurya</title></head>");
        res.write(
          "<body><h1>you need to dance</h1></body></html>",
        );
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})