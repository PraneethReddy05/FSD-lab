const http = require('http');
const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("Hello, welcome!")
    }
    if(url == '/error'){
        res.writeHead(404,{'Content-Type':'text/html'});
    }else{
        res.writeHead(500,{'Content-Type':'text/html'});
    }
});
server.listen(3000,(req,res)=>{
    console.log("Server running on port 3000");
})