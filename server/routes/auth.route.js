import express from 'express'

const router = express.Router()

//data from the controller function.
import { signUp } from '../controllers/auth.controller'

//test the route.
router.get('/signup', signUp)


//export the router.
module.exports = router