import mongoose from 'mongoose'
import config from '../config/config.config'

const connectToDb = () => {
    try {

        mongoose.connect(config.mongodbUri)

        //log a success message.
        console.log(`Application Connected To The Database**`)
    } catch (error) {
        console.log('Connot Connect to the DB')
    }
}

export default connectToDb