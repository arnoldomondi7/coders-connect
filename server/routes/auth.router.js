import express from 'express'


const router = express.Router()

//data from the sign up page.
import { signIn, signUp } from '../controllers/auth.controller'

//sign up
router.post('/signup', signUp)

//sign in
router.post('/signin', signIn)

//export the router.
module.exports = router