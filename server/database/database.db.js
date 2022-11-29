import mongoose from 'mongoose'
import config from '../config/config.config'

const connectToDb = () => {
    try {
        mongoose.connect(config.mongodbUri)

        //log a success message.
        console.log(`Database Connected **`)
    } catch (error) {
        console.log('Unable To Connect To The Db')
    }
}

export default connectToDb