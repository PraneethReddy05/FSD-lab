const fs = require('fs');
fs.writeFile("test1.txt", "This is a simple text file1", (err)=>{});
fs.readFile("test1.txt", (err, data)=>{
    if(err) console.log("The File doesn't exist");
    else{
        console.log(data.toString());
    }
});