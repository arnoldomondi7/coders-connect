import express from 'express'

const router = express.Router()

//data from the controller component.
import {
	createPost,
	currentUserPost,
	getAccountPost,
	getPost,
	handleLike,
} from '../controllers/post.controller'

//register the user.
router.post('/create-post', createPost)

//get a single post.
router.get('/get-post/:id', getPost)

//get both my friends and my own posts.
router.get('/all/:userId', getAccountPost)

//get currentUser post.
router.get('/account/:username', currentUserPost)

//like/dislike a post.
router.put('/like/:id', handleLike)

//export the router
module.exports = router
