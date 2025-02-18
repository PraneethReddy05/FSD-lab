const fs = require('fs');
fs.appendFile("test1.txt", " Now we are appending text", (err)=>{});
fs.readFile("test1.txt", (err, data)=>{
    if(err) console.log("The File doesn't exist");
    else{
        console.log(data.toString());
    }
});