import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PostSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 200
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
    dislikes: {
        type: Array,
        default: []
    }

}, { timestamps: true })

const postData = model('Post', PostSchema)

export default postData