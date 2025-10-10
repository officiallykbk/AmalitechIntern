require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const { signer, refresher, RefresherV} = require('./helpers/jwtHelpers')
const { bcrypt_encoder, bcrypt_decoder } = require('./helpers/bcrypter')
const { verifyToken } = require('./middleware/auth')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const _ = require('lodash')

const users = []


app.get('/',(req,res)=>{
    return res.json(users)
})

// addUser
app.post('/signUp',async(req,res)=>{
     if(!req.body) return console.log(`No body found: ${req.body}`)
    console.log(req.body)
    const { name, age, password}= req.body
    if(!name || !password) return res.json({message: "Provide name and password to continue"});
    
    const hashedpassword = await bcrypt_encoder(password)
    
    const user = {id:users.length+1 ,name: name, age: age, password: hashedpassword}
    const session = signer(_.pick(user, ['id','name','password']))
    const refresh_token = refresher(_.pick(user, ['id','name','password']))
    users.push({...user, refresh_token: refresh_token})
    console.log(`New User ${JSON.stringify(users[users.length - 1])} -token: ${session}`)
    return res.json(`User: ${JSON.stringify(users[users.length - 1])} -token: ${session}`)
})

app.post('/login',async(req,res)=>{
    if(!req.body) return console.log(`No body found: ${req.body}`)
    const {id,name, password} = req.body
    if(!id || !name || !password) return res.json({message: "Provide name and password to continue"});
    // find user
    const user = users.find(user => user.id === id);
    if (!user) return res.json({message: "This user does not exist try signing up"});

    const decoded_pass = await bcrypt_decoder(password, user.password)
    if (!decoded_pass) return res.json({message: "Password is Invalid"});

    // start session
    const session = signer({id,name,password})
    const refresh_token = refresher(_.pick(user, ['id','name','password']))
    return res.json({...user,session,refresh_token})
})

app.post('/refresh/:id',(req,res) => {
    const {id} = req.params
    const user = users.find(user => user.id === parseInt(id));
    if (!user) return res.status(404).json({ message: "User not found" })

    if(!user.refresh_token) return res.status(401).json({message: "There is no refresh token"});
    const check = RefresherV(user.refresh_token)
    if(!check) return res.status(403).json({message: "Token is invalid"});

     // start session
    const session = signer(_.pick(user, ['id','name','password']))
    const refresh_token = refresher(_.pick(user, ['id','name','password']))
    user.refresh_token = refresh_token
    return res.json({...user,session,refresh_token})
})

app.delete('/logout/:id', (req, res) => {
  const {id} = req.params;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return res.status(404).send('User not found');

  user.refresh_token = null;

  res.sendStatus(204);
});


// protected
app.post('/dashboard',verifyToken,async(req,res) => {
    console.log(req.user)
    return res.json({message: `You've successfully passed checks: ${req.user}`})
})


// running server
const port = process.env.PORT
app.listen(port, () => console.log(`Server Startedzzz on port ${port}`))

