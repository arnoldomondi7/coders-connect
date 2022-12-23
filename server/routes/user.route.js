import express from 'express'

const router = express.Router()

//data from the controller component.
import { getSingleUser, login, register } from '../controllers/user.controller'

//register the user.
router.post('/register', register)

//login the user.
router.post('/login', login)

//get a single user.
router.get('/:id', getSingleUser)

//export the router
module.exports = router
