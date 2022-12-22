import express from 'express'

const router = express.Router()

//data from the controller component.
import { createPost } from '../controllers/post.controller'

//register the user.
router.post('/create-post', createPost)

//export the router
module.exports = router
