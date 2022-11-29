import mongoose from 'mongoose'
const { Schema, model } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        min: 2,
        max: 30,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        max: 50,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    profilePicture: {
        type: String,
        default: ''
    },
    coverPicture: {
        type: String,
        default: ''
    },
    follwers: {
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
    description: {
        type: String,
        max: 199
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

export default userData