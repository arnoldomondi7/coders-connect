import express from 'express'


const router = express.Router()

//data from the controller.
import {
    deletePost,
    dislikePost,
    getPost,
    likePost,
    timelinePosts,
    updatePost,
    userPost
} from '../controllers/post.controller'

//create post
router.post('/post', userPost)

//update post.
router.put('/update/post/:id', updatePost)

//delete post
router.delete('/delete/post/:id', deletePost)

//like a post.
router.put('/like/post/:id', likePost)

//dislike a post
router.put('/dislike/post/:id', dislikePost)

//get a post.
router.get('/post/:id', getPost)

//get following posts
router.get('/timeline/all', timelinePosts)

//export.
module.exports = router