import config from '../config/config.config.js'
import mongoose from 'mongoose'

const ConnectToDb = () => {
	try {
		mongoose.set('strictQuery', false)
		mongoose.connect(config.mongodbURI)
		//log a success message.
		console.log('Database is Connected and Running')
	} catch (error) {
		console.log('Unable To Connect To The Database')
	}
}

export default ConnectToDb
