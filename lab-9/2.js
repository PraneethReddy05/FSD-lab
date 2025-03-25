const express = require("express");
const users = require("./user.json");
const ejs = require("ejs");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/user",(req,res)=>{
    res.render("./table.ejs",{users});
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})