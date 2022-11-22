import Post from '../models/post.model'


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