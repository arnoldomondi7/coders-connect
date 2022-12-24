import Post from '../models/post.model'
import User from '../models/user.model'

//create the post.
export const createPost = async (req, res) => {
	const newPost = new Post(req.body)
	try {
		//save the post.
		const savePost = await newPost.save()

		//send the res to the user.
		res.status(200).json(savePost)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			error: 'Unable to Create Post',
		})
	}
}

//get a single post.
export const getPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)

		//send the res to the user.
		res.status(200).json(post)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			error: 'Unable to Create Post',
		})
	}
}

//get both my friends and my own posts.
export const getAccountPost = async (req, res) => {
	try {
		const currentUser = await User.findById(req.params.userId)
		const userPost = await Post.find({ userId: currentUser._id })

		//get posts of those i follow.
		const friendsPosts = await Promise.all(
			currentUser.followings.map(friendId => {
				return Post.find({ userId: friendId })
			})
		)

		//send the response back to the user.
		res.status(200).send(userPost.concat(...friendsPosts))
	} catch (error) {
		console.log(error)
		res.status(500).json({
			error: 'Unable to Load Posts',
		})
	}
}

//get all post for the current user.
export const currentUserPost = async (req, res) => {
	try {
		//get the username from the user
		const user = await User.findOne({ username: req.params.username })
		//get the posts, based on the userId
		const posts = await Post.find({ userId: user._id })

		//send the res to the user.
		res.status(200).json(posts)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			error: 'Unable to Get User Posts',
		})
	}
}

//handle the likes.
export const handleLike = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)

		if (!post.likes.includes(req.body.userId)) {
			await post.updateOne({ $push: { likes: req.body.userId } })
			res.status(200).send('Post Liked')
		} else {
			await post.updateOne({ $pull: { likes: req.body.userId } })
			res.status(200).send('Post Unliked')
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			error: 'Unable to Like User Posts',
		})
	}
}
