import mongoose from 'mongoose'
const { Schema, model } = mongoose

// create the user schema.
const PostSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 550
    },
    image: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
}, { timestamps: true })

const userData = model('Post', PostSchema)

//export the userData.
export default userData