import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import { readdirSync } from 'fs'
const morgan = require('morgan')

const app = express()

//handle the middleware.
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))

//handle the routes.
readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)))

//export the express app.
export default app