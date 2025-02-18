const fs = require("fs");
fs.writeFileSync("./test.txt","This is a temporary file!");
const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Hello World");
    res.end();
});
server.listen('8080');
console.log("server running on port 8080");