const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/demo")
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
    }
})
const User = mongoose.model("User",userschema);

//Create
app.post("/api/users",async(req,res)=>{
    console.log(req.body);
    try{
        const user = new User(req.body);
        await user.save();
        console.log(user);
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
    }
});

//Genetic Read
app.get("/api/users",async (req,res)=>{
    const users = await User.find({});
    res.status(200).json(users);
});

//Specific Read
app.get("/api/users/:id",async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    res.status(200).json(user);
});

//Update
app.put("/api/users/:id",async(req,res)=>{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body,{new:true});
    console.log(user);
    res.status(200).json(user);
})

//Delete
app.delete("/api/users/:id",async(req,res)=>{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id)
    console.log(user)
    res.status(200).json(user);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})