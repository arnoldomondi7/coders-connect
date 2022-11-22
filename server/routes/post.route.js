import express from 'express'


const router = express.Router()

//data from the post controlelr.
import { createPost } from '../controllers/post.controller'

//create post
router.post('/post', createPost)
//get post.
//update post.
//like a post.
//get timeline post.
//delete a post

//export the router.
module.exports = router