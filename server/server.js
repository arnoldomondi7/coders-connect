import config from './config/config.config'
import app from './express'

//handle the database.
import connectToDb from './database/database.db'


connectToDb()

//listen to the server.
app.listen(config.port, (error) => {
    if (error) {
        return console.log(`Unable to connect to server because of ${error}`)
    }

    console.log(`server is up and running on port ${config.port}`)
})