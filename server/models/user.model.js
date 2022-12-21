import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 99,
		},
		userauth: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
		},
	},
	{ timestamps: true }
)

const userModel = model('User', userSchema)

export default userModel
