const express = require('express')
const {getTasks,getTaskById, editTask, deleteTask, createTask, editTaskCompletion,} = require('../controllers/task.controller')
const ValidateTask = require('../middleware/validateTask')

// const logger = require('../middleware/logger')
const router = express.Router()

router.route('/:id')
.get(getTaskById)
.put(ValidateTask,editTask)
.delete(deleteTask)


router.get('/',getTasks)

router.post('/',ValidateTask,createTask)
// TODO: check the effect of this change
router.patch('/:id/completion',editTaskCompletion)


module.exports = router
