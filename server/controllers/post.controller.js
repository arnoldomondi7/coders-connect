import Post from '../models/post.model'
import User from '../models/user.model'

export const createPost = async (req, res) => {
    //get the post from the frontend.
    const newPost = new Post(req.body)

    try {
        const savePost = await newPost.save()

        //send the user to the frontend.
        res.json(savePost)
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = async (req, res) => {
    const { userId } = req.body
    try {
        const post = await Post.findById(req.params.id)

        //compare if the id who created the post.
        //is the same as the usersId

        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })

            //send res to the user.
            res.json({
                message: 'User Post Was Updated'
            })
        } else {
            res.json({
                error: 'You Can Only Update Your Post'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//delete the post
export const deletePost = async (req, res) => {
    const { userId } = req.body
    try {
        const post = await Post.findById(req.params.id)

        //compare if the id who created the post.
        //is the same as the usersId

        if (post.userId === userId) {
            await post.deleteOne({ $set: req.body })

            //send res to the user.
            res.json({
                message: 'User Post Was Deleted'
            })
        } else {
            res.json({
                error: 'You Can Only Delete Your Post'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//like the post.
export const likePost = async (req, res) => {
    const { userId } = req.body

    try {
        //find the post by id.
        const post = await Post.findById(req.params.id)

        //check if it has been liked if not add the like.
        if (!post.likes.includes(userId)) {
            await Post.updateOne({ $push: { likes: userId } })

            return res.json({
                message: 'You Liked The Post'
            })
        } else {
            //handle the unlike
            await Post.updateOne({ $pull: { likes: userId } })
            return res.json({
                message: 'You Unliked The Post'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//get the post.
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        //send the post to the user.
        res.json(post)
    } catch (error) {
        console.log(error)
    }
}

//get the timeline.
export const timeline = async (req, res) => {
    const { userId } = req.body

    try {
        //find the current user.
        const currentUser = await User.findById(userId)

        //get all the post of the current user.
        const currentUserPost = await Post.find({ userId: currentUser._id })

        //get the post of people that you are following.
        const friendsPosts = await Promise.all(
            currentUser.following.map((friendsId) => {
                return Post.find({ userId: friendsId })
            })
        )

        //send res to the user.
        res.json(currentUserPost.concat(...friendsPosts))
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}