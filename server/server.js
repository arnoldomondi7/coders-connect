import app from './express.js'
import config from './config/config.config.js'
import ConnectToDb from './database/database.db.js'

//connect to the database.
ConnectToDb()

//listen to the port
app.listen(config.port, error => {
	if (error) {
		return console.log('Unable To Connect')
	}

	console.log(`Server Is Listening On Port ${config.port}`)
})
