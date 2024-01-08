const User = require("../models/User")
const jwt = require('jsonwebtoken')
const {redisClient} = require('../connections/redis')
const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid')

exports.signUp = async (req , res) => {
    const {name, email , password , passwordRep} = req.body
    if(password != passwordRep)
        return res.status(400).json({err : "Passwords not match"})
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        const user = new User({id : uuidv4() ,  name , email , password :  hashed })
        user.save((err , data) => {
            if(err)
                return res.status(400).json({err : err }) 
            res.send(true)
        })
    }catch(err){
        return res.status(400).json({err : err })
    }
}


exports.signIn = async (req ,  res) => {
    const {email , password} = req.body
    try {
        User.findOne({email : email }, async (err, user) => {
            if(err || !user) {
                return res.status(400).json({err: "This user doesn't exist"})
            }
            const isValid = await bcrypt.compare(password, user.password);
            if(!isValid) {
                return res.status(401).json({err: "Wrong password"})
            }

            
            const token = jwt.sign({_id: user._id, exp: Math.floor(Date.now() / 1000) + (15 * 24* 60 * 60)}, process.env.JWT_SECRET, { algorithm: 'HS256' }); 
           
            const {_id  , userName , fullName  } = user;
            
            await redisClient.set(`${_id}-Token` , token , (err , data) => {
                if(!err) redisClient.expire(`${_id}-Token`, 15 * 24 * 60 * 60);
            })
            res.send({_id  ,  userName , fullName , token })
        })
    }
    catch(err) {
        return res.status(400).json({err : err })
    }
}


exports.userById = (req, res, next, id) => {
    User.findById(id).select("-password").exec((err, user) => {
        if(err || !user) {
            return res.status(404).json({
                error: "no user"
            })
        }
        req.profile = user;
        next();  
    })
}


exports.changePassword = async (req , res) => {
    const {Uid} = req.params
    const {password , newPassword , newPasswordRep} = req.body

    if(newPassword != newPasswordRep)
        return res.status(400).json({error : "new Passwords not match"})
    
    let query = User.findById({_id : Uid})
    query.exec(async (err , data) => {
        if(err) return res.status(400).json({err})

        const isValid = await bcrypt.compare(password, data.password);
        if(!isValid) {
            return res.status(401).json({error: "Wrong password"})
        }

        try {
            // Hashing passwords
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(newPassword, salt);
            let query = User.updateOne({_id : Uid} , {$set : {password : hashed}})
    
            query.exec((err , data) => {
                if(err) return res.status(400).json({err : err }) 
                res.send(data)
            })
    
        }catch(err){
            return res.status(400).json({err : err })
        }
    })
}


exports.signOut = async (req, res)=>{
    try {
        await redisClient.del(`${req.profile._id}-Token`, (err, reply) => {})
        res.send(true)
    }catch(err) {
        return res.status(400).json({err : err })
    }
}

exports.forgetPassword = (req , res ) => {
    const {email} = req.body
    let query = User.findOne({email : email})
    query.exec(async (err , data) => {
        if(err) return res.status(400).json({err})
        if(!data) return res.status(400).json({err : "This email doesn't exist."})
        let random = Math.floor(Math.random()*1000000)
        await redisClient.set(`${data.id}-changePassword` , random , (err , data) => {
            if(!err) redisClient.expire(`${data.id}-changePassword`, 10 * 60)
        })
        // send email to user 
        const url = `http://localhost:3000/reset-password?user-id=${data.id}&verify-code=${random}`
        console.log(url)

        // end
        res.send(true)
    })
}


exports.resetPassword = async (req , res ) => {
    try {
        const {id , password , passwordRep , verifyCode} = req.body
        const code = await redisClient.get(`${id}-changePassword`)
    
        if(!(password && passwordRep))
            return res.status(400).json({err:"empty field"})
        if(password !== passwordRep)
            return res.status(400).json({err:"passwords not match"})
        if(code !== verifyCode)
            return res.status(400).json({err : "code not correct"})
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        let query = User.updateOne({id : id}, {$set: {password : hashed}})
        query.exec(async (err , data) => {
            if(err) return res.status(400).json({err})
            await redisClient.del(`${id}-changePassword`, (err, reply) => {})
            res.send(data)
        })
    }catch(err) {
        return res.status(400).json({err})
    }
}

exports.getUser = (req , res) => {
    res.send(req.profile)
}
