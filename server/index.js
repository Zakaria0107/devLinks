const express = require('express')
const cors = require("cors")
const expressValidator = require("express-validator")
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()
const {connectToDatabase} = require('./connections/mongodb')
const { connectRedis } = require('./connections/redis');
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


connectRedis()
connectToDatabase()

// middlewares
app.use(express.json());
app.use(cookieParser());

// app.use(express.static('public'));
app.use(cors())
app.use(expressValidator())


//Routes 
const userRouter = require("./routes/user")
const infoRouter = require("./routes/information")

app.use('/UPLOADS', express.static('./UPLOADS'));
app.use('/api/user' , userRouter)
app.use('/api/information' , infoRouter)






const port = 5000 ; 
app.listen(port , () => console.log(`app is listening on port ${port}`))