import mongoose from 'mongoose'
import config from '../config/config.config'

const connectToDb = () => {
    try {
        mongoose.connect(config.mongoUri)
        //log a success message.
        console.log(`*Mongo Database connected**`)
    } catch (error) {
        console.log(`Unable to connect to the db because of ${error}`)
    }
}

export default connectToDb