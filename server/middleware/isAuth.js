const jwt = require('jsonwebtoken')
const {redisClient} = require("./../connections/redis")


exports.checkAuth = async (req , res , next) => {  
    const token = req.headers?.authorization?.split(' ')[1] ? req.headers?.authorization?.split(' ')[1] : undefined
    const redisToken = await redisClient.get(`${req.profile._id}-Token`)
  
    if(redisToken) {
      if(!(redisToken === token)){
        return res.status(400).json({err : "unothorized"})
      }else{
         next()
      }
    }else {
        jwt.verify(token, process.env.JWT_SECRET , async (err, decoded) => {
          if (err) {
            return res.status(400).json({err : err});
          }  
          await redisClient.set(`${req.profile._id}-Token` , token , (err , data) => {
            if(!err) redisClient.expire(`${req.profile._id}-Token` , decoded.exp);
          })
          next()
        })
    }
}



