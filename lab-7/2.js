const http = require('http');
const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url == '/home'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("Hello, welcome to home!")
    }
    if(url == '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("About Us!")
    }
    if(url == '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("Contact page!")
    }
});
server.listen(3000,(req,res)=>{
    console.log("server running on port 3000");
});