let User = require('../models/User')
const multer = require("multer")




const storageFiles = multer.diskStorage({
    destination : (req , res , cb) => {
        cb(null , 'UPLOADS/')
    } ,
    filename : (req , file , cb ) => {
        cb(null , file.fieldname+"-"+Date.now()+".jpg")
    }
})
exports.storageFiles = multer({storage:storageFiles}).single('profileImage')

exports.updateInfo = (req , res) => {
    const {firstName , lastName , email} = req.body
    if(req.file){
        let query =  User.updateOne({id :req.profile.id} , {$set : {firstName , lastName , email , profileImage: req.file}})
        query.exec((err , data) => {
            if(err) 
                return res.status(400).json({err})
            res.send(data)
        })
    }else {
        let query =  User.updateOne({id :req.profile.id} , {$set : {firstName , lastName , email}})
        query.exec((err , data) => {
            if(err) 
                return res.status(400).json({err})
            res.send(data)
        })
    }
}

exports.updateLinks = (req , res) => {
    const {listLinks} = req.body
        let query =  User.updateOne({id :req.profile.id} , {$set : {listLinks}})
        query.exec((err , data) => {
            if(err) 
                return res.status(400).json({err})
            res.send(data)
        })
}