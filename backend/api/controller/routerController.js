const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModle')
const products = require('../../products')
const getProducts = (req,res) => {
    res.status(200).json(products)
}


const registerUser = asyncHandler(async(req,res) => {
   const {name, email ,password} = req.body
    
   if(!name || !email || !password){
    res.status(404)
    throw new Error("please Add All three fileds")
   }
   const emailExist = userModel.findOne({email})
   if(emailExist){
    return res.status(404).json({
        msg : "The user is already Existed"
    })
    
   }
   
   //hash the password 
   const salt = await bcrypt.genSalt(10)
   const hassedPassword = await bcrypt.hash(password, salt)

   const user = userModel.create({
    name,
    email,
    password : hassedPassword
   })
   if(user){
   return res.status(200).json({
        _id : user._id,
        name : user.name,
        email: user.email,
        password : user.password,
        token : generateToken(user._id)
    }) 
   }
   else{
    return res.status(404).json({
        msg : "Invalid user Data"
    })
   }
}
)
const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body 

    const user  = userModel.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
       return res.status(200).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            password : user.password,
            token : generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error('an Authorized user')
    }

})

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SCRET, {
        expiresIn: "10d"
    })
}
module.exports = {
    getProducts,
    registerUser,
    loginUser
}