import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import { readdirSync } from 'fs'
const morgan = require('morgan')
//initiate the app.
const app = express()

//utilize the middlewares.
app.use(helmet())
app.use(compression())
app.use(morgan('common'))
app.use(cors())
app.use(express.json())

//handle the routes.
readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)))




//export the app to the main file.
export default app