const express = require('express')
const app = express()
const dotenv = require('dotenv')
const taskRoute = require('./routes/task.route')
const port =process.env.PORT

dotenv.config()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes
app.get('/',(req,res)=>res.send(`<h1 style="color:blue;text-align:center;font-size:40px;">⚙️  Just Another Server Day ⚙️ <h1>`))
app.use('/task',taskRoute)

// server start
app.listen(port,()=>console.log(`Backend has started on port ${port}`))