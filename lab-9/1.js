const express = require("express");
const users = require("./user.json");
const fs = require("fs");
const app = express();
// const usersFilePath = path.join(__dirname, "user.json");

app.use(express.json());

app.get("/user",(req,res)=>{
    res.json(users);
});
app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.find(u=>u.id == id);
    res.json(user);
});
app.post("/user",(req,res)=>{
    console.log(req.body);
    const {id,name}=req.body;
    users.push({id,name});
    res.json(users);
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./user.json", data,(err)=>{
        console.log(err);
    });
});
app.put("/user/:id",(req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const user = users.find(u=>u.id == id);
    user.name = name;
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./user.json", data,(err)=>{
        console.log(err);
    });
    res.json(users);
})
app.delete("/user/:id",(req,res)=>{
    const id = req.params.id;
    users.splice(id,1);
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./user.json", data,(err)=>{
        console.log(err);
    });
    res.json(users);
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

//a dummy commit