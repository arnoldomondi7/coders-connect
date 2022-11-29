import app from './express'
import config from './config/config.config'

//handle the db.
import connectToDb from './database/database.db'

connectToDb()

//listen to the server.
app.listen(config.port, (error) => {
    if (error) {
        return console.log(`Server is Unable To connect Because of  ${error}`)
    }

    //log a success message.
    console.log(`Server is running on port ${config.port}`)
})