// imports
import express from 'express';
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { socketHandler } from './socketHandler.js';

// variables
const app = express()
const port = process.env.PORT || 40000
const server = createServer(app)
const io = new Server(server,{
  cors: { origin: "*" }
});

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

io.on('connection',(socket)=>{
    socketHandler(io,socket)
})

// routes
app.get('/',(req,res)=>{
    console.log('This is the beginning')
})

// start server
server.listen(port, () => console.log(`Server started on port: ${port}`))