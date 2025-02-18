const fs = require("fs");
fs.writeFileSync("./test.txt","This is a temporary file!");
const http = require('http');
const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url == "/"){
        res.write("Welcome to the homepage!");
        res.end();
    }else if(url == "/about"){
        res.write("This is the about page!");
        res.end();
    }
});
server.listen('8080');
console.log("server running on port 8080");