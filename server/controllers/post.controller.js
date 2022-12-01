import Post from '../models/post.model'
import User from '../models/user.model'

//create a post
export const userPost = async (req, res) => {
    const newPost = new Post(req.body)

    try {
        const savedPost = await newPost.save()

        //send res to the user.
        res.status(201).send(savedPost)
    } catch (error) {
        console.log(first)
        return res.status(400).send(error)
    }
}

//update the post.
export const updatePost = async (req, res) => {
    try {

        //find the post id.
        const post = await Post.findById(req.params.id)

        //compare the userId and req.body.user are same.
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body })

            //send response.
            res.status(200).send('Post Was Updated')
        } else {
            res.status(400).send('You can only update your post')
        }
    } catch (error) {
        console.log(error)
    }
}

//delete the post.
export const deletePost = async (req, res) => {
    try {

        //find the post id.
        const post = await Post.findById(req.params.id)

        //compare the userId and req.body.user are same.
        if (post.userId === req.body.userId) {
            await post.deleteOne()

            //send response.
            res.status(200).send('Post Was Deleted')
        } else {
            res.status(400).send('You can only Delete your post')
        }
    } catch (error) {
        console.log(error)
    }

}

//like the post.
export const likePost = async (req, res) => {
    try {

        //get the post by its id.
        const post = await Post.findById(req.params.id)

        //check if the id of the user is in the likes.
        //if not add it.
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })

            //send a success log.
            res.status(200).send('You Liked The Post')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })

            //send a success log.
            res.status(200).send('You Unliked The Post')
        }
    } catch (error) {
        console.log(error)
    }
}

//dislike the post.
export const dislikePost = async (req, res) => {
    try {
        //get the post by its id.
        const post = await Post.findById(req.params.id)

        //check if the id of the user is in the likes.
        //if not add it.
        if (!post.dislikes.includes(req.body.userId)) {
            await post.updateOne({ $push: { dislikes: req.body.userId } })

            //send a success log.
            res.status(200).send('You Disliked The Post')
        } else {
            await post.updateOne({ $pull: { dislikes: req.body.userId } })

            //send a success log.
            res.status(200).send('You Undisliked The Post')
        }
    } catch (error) {
        console.log(error)
    }
}

//get single post.
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        //send the res to the user.
        return res.status(200).send(post)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

//get the timeline posts.
export const timelinePosts = async (req, res) => {
    try {

        //get the cureent user.
        const currentUser = await User.findById(req.body.userId)

        //get the user posts.
        const userPosts = await Post.find({ userId: currentUser._id })

        //get post from everyone you are following.
        const followingPosts = await Promise.all(
            currentUser.following.map((followingPost) => {

                //find all the post by the users who you follow.
                return Post.find({ userId: followingPost })
            })
        )

        res.json(userPosts.concat(...followingPosts))
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}