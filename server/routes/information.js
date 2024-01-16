const express = require("express")
const router = express.Router()
const {updateInfo , storageFiles , updateLinks} = require('../controllers/infoController')
const {userById} = require('../controllers/loginController')
const {checkAuth} = require('./../middleware/isAuth') 

router.post("/:Uid/updateInfo" ,checkAuth , storageFiles ,  updateInfo )
router.post("/:Uid/updateLinks" ,checkAuth  ,  updateLinks )



router.param('Uid' , userById)
module.exports = router  
