const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("content-type", "text/html");
        res.write("<html><head><title>Dhruv Maurya</title></head>");
        res.write(
          "<body><h1>Hello everyone, I am Dhruv Maurya</h1>",
        );
        res.write("<h2>Enter your details</h2>");
        res.write("<form action='/submit-details' method='POST'>");
        res.write("<label for='Name'>Name</label>");
        res.write("<input ' type='text' id='name' ></input>");
        res.write("<label for='Male'>Male</label>");
        res.write("<input ' type='radio' id='Male'name='gender' value='male'></input>");
        res.write("<label for='female'>Female</label>");
        res.write("<input  type='radio' id='Female' name='gender' value='female'></input>");
        res.write("<input type='submit' value='Submit'>")

        res.write("</form>");

        res.write("</body></html>");
        return res.end();
    
    }else if(req.url.toLocaleLowerCase()==="/submit-details" && req.method=="POST"){
        fs.writeFileSync('outputs.txt','dhruv maurya');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }else{
         res.setHeader("content-type", "text/html");
         res.write("<html><head><title>Dhruv Maurya</title></head>");
         res.write("<body><h1>you need to dance</h1></body></html>");
         res.end();
    }
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})