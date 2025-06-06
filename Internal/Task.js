const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    status:{type:String,Enum: ["pending", "in-progress", "completed"],default:"pending"},
    dueDate:{type:Date},
    assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})