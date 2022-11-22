import express from 'express'

const router = express.Router()

//data from the post controlelr.
import {
    createPost,
    deletePost,
    getPost,
    likePost,
    timeline,
    updatePost
} from '../controllers/post.controller'

//create post
router.post('/post', createPost)

//get post.
router.get('/post/:id', getPost)
//update post.
router.put('/likes/:id', likePost)

//like a post.
router.put('/update/:id', updatePost)

//get timeline post.
router.get('/timeline/all', timeline)

//delete a post
router.delete('/delete/:id', deletePost)

//export the router.
module.exports = router