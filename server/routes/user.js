const express = require("express")
const router = express.Router()
const {signIn  , signUp, forgetPassword , resetPassword , getUser , signOut } = require('../controllers/loginController')
const {userById} = require('../controllers/loginController')
const {SignInValidator , SignUpValidator } = require('./../middleware/formValidator')
const {checkAuth} = require('./../middleware/isAuth') 

router.get("/:Uid/preview" , getUser )
router.get("/:Uid" ,checkAuth ,  getUser )
router.post("/signIn" ,SignInValidator ,  signIn)
router.post("/signUp" ,SignUpValidator ,  signUp)
router.post('/forget-password' , forgetPassword)
router.post('/reset-password' , resetPassword) 
router.delete('/sign-out/:Uid' ,checkAuth , signOut )


router.param('Uid' , userById)
module.exports = router  

