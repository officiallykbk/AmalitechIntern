const express =require('express')
const app = express()
const dotenv = require('dotenv')
const userRoute = require('./routes/user.route')
const CreateTable = require('./model/user.model')



dotenv.config()
// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// view
app.set('view engine','pug')
app.set('views','./views')

// CreateTable()

// routes
app.use('/user',userRoute)



// running server
const port = process.env.PORT
app.listen(port, () => console.log(`Server Started on port ${port}`))

