import express from 'express'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import { readdirSync } from 'fs'

//get the morgan.
const morgan = require('morgan')

//initiate the app.
const app = express()

//initiate the middlewares.
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(morgan('dev'))

//handle the endpoint.
readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)))

//export the app.
export default app