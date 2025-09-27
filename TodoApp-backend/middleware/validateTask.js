const Joi = require('joi')

const taskSchema = Joi.object({
  id: Joi.forbidden(),
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().allow("").optional(),
  due_date: Joi.date().min("now"),
  priority: Joi.string().valid("low", "medium", "high"),
  completion_status: Joi.boolean()
//   .truthy('true',1)
//   .falsy('false',0)
  .default(false)
})


const ValidateTask = (req,res,next) =>{
    const {error} = taskSchema.validate(req.body)
    if(error) return console.error(`Task is not valid: ${error.details[0].message}`)
    next()
}

module.exports = ValidateTask