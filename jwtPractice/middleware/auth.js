require('dotenv').config()
const jwt = require('jsonwebtoken')

// middleware
function verifyToken(req,res,next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({message:'No token found'});

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err) return res.status(403).json({message: "Token is invalid"});
        req.user = decoded
        next()
    })
}

module.exports = { verifyToken}