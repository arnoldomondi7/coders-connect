import mongoose from 'mongoose'
const { Schema, model } = mongoose

const storyModel = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const StoryModel = model('Stories', storyModel)

export default StoryModel
