import express from 'express'

const router = express.Router()

//data from the controller function.
import { signIn, signUp } from '../controllers/auth.controller'

//test the route.
router.post('/auth/signup', signUp)

//signin the user.
router.post('/auth/signin', signIn)


//export the router.
module.exports = router