import mongoose from 'mongoose'
const { Schema, model } = mongoose
const { ObjectId } = Schema

const UserModel = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 99
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    },
    about: {
        type: String,
        trim: true
    },
    // photo: {
    //     data: Buffer,
    //     contentType: String

    // },
    following: [{
        type: ObjectId, ref: 'User'
    }],
    followers: [{
        type: ObjectId, ref: 'User'
    }]


})

const userData = model('User', UserModel)

//export the data.
export default userData