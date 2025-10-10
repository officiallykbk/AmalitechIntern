const bcrypt = require('bcrypt')
require('dotenv').config()

async function bcrypt_decoder (query_pass, db_pass){
     const decoded = await  bcrypt.compare(query_pass, db_pass)
    return decoded;
}

async function bcrypt_encoder(password) {
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT))
    const hashed =await bcrypt.hash(password, salt)
    return hashed;
}
module.exports = {bcrypt_decoder, bcrypt_encoder}