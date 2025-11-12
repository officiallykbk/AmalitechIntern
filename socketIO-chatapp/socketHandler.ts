import type {Server, Socket } from "socket.io";


export function socketHandler (io: Server, socket: Socket): void{
  console.log(`⚡ User connected: ${socket.id}`);
  // join room
    socket.on('JoinRoom', (room) =>{
      socket.join(room)
    })
    // leave room
    socket.on('Leave', (room)=>{
      socket.leave(room)
    })
    // emit message
    socket.on('message',(message)=>{
            console.log(`Received message: ${message.message} from ${message.user}`);
            // socket.broadcast.emit('received',message)
            // socket.to(message.user).emit('received',message) 
            socket.join(message.user)
            io.to(message.user).emit('received',message)
        })
    socket.on('error',()=>{
      console.log('Sorry an error occured')
    })
    // disconnect
    socket.on('disconnect',()=>{
      console.log('disconnecting')
    })  


}


