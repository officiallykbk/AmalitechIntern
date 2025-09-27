const Joi = require('joi')

const UserSchema=Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    age: Joi.number().min(10).max(100)
})

const userValidation = (req,res,next) => {
    
    const {error}=UserSchema.validate(req.body)
    if (error) return res.status(400).send('User data not valid');
    next()
    }
module.exports = userValidation