const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type: String, required : [true, "please Add the name filed"]
    },
    email : {
        type : String, required: [true, "please Add the name filed"]
    },
    password : {
        type : String, required: [true, "please Add the password filed"]
    }
})


module.exports = mongoose.model("userModel", userSchema)