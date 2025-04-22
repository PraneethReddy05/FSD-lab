const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const cors = require("cors")
const User = require("./User.js")
const Task = require("./Task.js")

const app = express();
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname));


mongoose.connect("mongodb://127.0.0.1:27017/tasks")
.then(()=>{
    console.log("successfully connected to database!")
})
.catch((err)=>{
    console.log(err);
})

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    try{
        if(token){
            let userId = jwt.verify(token,"secret")
            res.user = userId;
            next();
        }else{
            res.send({message:"Login to move on!!"});
        }
    }catch(err){
        res.status(400).send({message:`registration unsuccessful ${err}`});
    }
}

app.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {username,email,password} = req.body;
    try{
        let user = await User.findOne({email})
        if(user){
            res.status(400).send("Email already registered!");
        }
        const pass = await bcrypt.hash(password,10)
        const newUser = new User({name:username,email,password:pass})
        await newUser.save()
        res.status(200).send({message:"User registered successfully!"})
    }catch(err){
        res.status(400).send({message:`registration unsuccessful ${err}`})
    }
})

app.post("/login",async(req,res)=>{
    // console.log(req.body);
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        let same = await bcrypt.compare(password,user.password);
        if(!same){
            res.status(400).send({message:"invalid credentials"});
        }
        let token = jwt.sign({id:user._id},"secret",{expiresIn:"1d"})
        res.status(200).send({message:"User login successful.",token})
    }catch(err){
        res.status(400).send({message:`login unsuccessful ${err}`})
    }
})
app.get("/",(req,res)=>{
    app.sendFile(path.join(__dirname,"index.html"));
})

app.listen(port,()=>{
    console.log(`Servr running on port ${port}`)
})