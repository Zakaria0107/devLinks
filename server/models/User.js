const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id : {
        type : String 
    },
    firstName : {
        type : String 
    },
    lastName: {
        type : String 
    },
    profileImage : {
        type : Object 
    },
    listLinks : {
        type : [Object]
    },
    email : {
        type : String
    },
    password : {
        type : String ,
        default : null
    }
   
}, {timestamps: true})

module.exports = mongoose.model("User" , userSchema)