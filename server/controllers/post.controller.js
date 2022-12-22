import Post from '../models/post.model'

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
