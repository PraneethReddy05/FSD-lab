const http = require('http');
const url = require("url");
const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    if (queryParams.name) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello, ${queryParams.name}!`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Please provide a name in the query string.');
    }
});
server.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
});