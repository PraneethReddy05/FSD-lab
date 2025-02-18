const fs = require('fs');

fs.mkdir("./newdir", (err)=>{})
fs.unlink("deleteme.txt", (err)=>{});
fs.rename("changeme.txt", "newname.txt", (err)=>{});
fs.readdir("./newdir", (err, files)=>{
    if(err) console.log(err);
    else{
        files.forEach(file=>{
            console.log(file);
        })
    }
});