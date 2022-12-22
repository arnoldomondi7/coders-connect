import mongoose from 'mongoose'
const { Schema, model } = mongoose

const postModel = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		likes: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
)

const PostData = model('Post', postModel)

export default PostData
