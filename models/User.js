const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:2,
        max:25,
        unique:true
    },
    email:{
        type:String,
        require:true,
        max:70,
        unique:true
    }, 
    password:{
        type:String,
        require:true,
        min:4
    }


},{timestamps:true})


module.exports = mongoose.model("User",UserSchema)