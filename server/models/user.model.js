import mongoose from 'mongoose'
const { Schema, model } = mongoose

//create the mode;.
const UserModel = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 999
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

const userData = model('User', UserModel)

export default userData