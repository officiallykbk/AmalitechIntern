const express = require('express')
const {getUser,getUserById,createUser,deleteUser} = require('../controllers/user.controller')
const router = express.Router()

router.get('/',getUser)

router.get('/:id',getUserById)


router.post('/',createUser)

router.delete('/:id',deleteUser)

module.exports = router