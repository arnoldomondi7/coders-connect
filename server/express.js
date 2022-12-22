import express from 'express'
import cors from 'cors'
import { readdirSync } from 'fs'

const app = express()

//handle the middlewares.
//the first 2 are used only for the post and the put options.
//its used to convert the json object to json data.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//handle the express routes.
readdirSync('./routes').map(route =>
	app.use('/api', require(`./routes/${route}`))
)

//export the app.
export default app
