const jwt = require('jsonwebtoken')
require('dotenv').config()

function verifier(token){
   return  jwt.verify(token,process.env.JWT_SECRET,{expiresIn: '5m'})
    
}

function signer(payload){
    const token =  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: '1m'})
    return token
}

function refresher(payload){
    const refreshT = jwt.sign(payload,process.env.REFRESH_SECRET,{expiresIn: '5m'})
    return refreshT
}

function RefresherV(token){
   return jwt.verify(token,process.env.REFRESH_SECRET,{expiresIn: '5m'})
    
}


module.exports ={signer, verifier, refresher, RefresherV}