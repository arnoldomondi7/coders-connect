import app from './express'
import config from './config/config.config'

import connectToDb from './database/database.db'

//connect to the db.
connectToDb()


//listen to the server.
app.listen(config.port, (error) => {
    if (error) {
        return console.log(`Cannot Connet to the server`)
    }

    console.log(`Server is up and running, on port ${config.port}`)
})