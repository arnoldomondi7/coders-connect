import mongoose from 'mongoose'
const { Schema, model } = mongoose

// create the user schema.
const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        min: 2,
        max: 44,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 55,
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    profilePicture: {
        type: String,
        default: ''
    },
    coverPicture: {
        type: String,
        default: ''
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    about: {
        type: String,
        max: 200
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
}, { timestamps: true })

const userData = model('User', UserSchema)

//export the userData.
export default userData