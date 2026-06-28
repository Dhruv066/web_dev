const http=require('http');


const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.write("<html><head><title>NavPage</title></head>");
    if(req.url==='/home'){
        res.write(`<html>
            <head><title>Mens</title>
            <body>
            <h1>Welcome to Home page.</h1>
            </body>
            </html>
            `);
            return res.end();

    }else if(req.url==='/Men'){
        res.write(`<html>
            <head><title>Mens</title>
            <body>
            <h1>Welcome to Men's collection.</h1>
            </body>
            </html>`);
            return res.end();
        }else if(req.url==='/Women'){
            res.write(`<html>
            <head><title>Mens</title>
            <body>
            <h1>Welcome to Women's collection.</h1>
            </body>
            </html>`);
            return res.end();
        }else if(req.url==='/Kids'){
            res.write(`<html>
            <head><title>Mens</title>
            <body>
            <h1>Welcome to Kids collection.</h1>
            </body>
            </html>`);
            return res.end();
        }else if(req.url==='/Cart'){
            res.write(`<html>
            <head><title>Mens</title>
            <body>
            <h1>Welcome to Cart.</h1>
            </body>
            </html>`);
            return res.end();
        }
    res.write(`<html>
            <head><title>shoping</title><body>

    <nav>
        <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Men">Men</a></li>
            <li><a href="/Women">Women</a></li>
            <li><a href="/Kids">Kids</a></li>
            <li><a href="/Cart">Cart</a></li>
        </ul>
    </nav>

</body>
</html>`);
  res.end();
});


const POST=3001;
server.listen(POST, () => {
  console.log(`Server is running on port http://localhost:${POST}`);
});