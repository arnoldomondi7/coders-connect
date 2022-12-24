import express from 'express'
import cors from 'cors'
const morgan = require('morgan')
import { readdirSync } from 'fs'
import multer from 'multer'
import path from 'path'

const app = express()

//handle the middlewares.
//the first 2 are used only for the post and the put options.
//its used to convert the json object to json data.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

//handle the path.
app.use(
	'/upload',
	express.static(path.join(__dirname, '../client/public/assets/uploads/'))
)

//handle the image uploads.
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../client/public/assets/uploads/')
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name)
	},
})
const upload = multer({ storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
	try {
		return res.status(200).json('File uploaded successfully!')
	} catch (error) {
		console.log(error)
	}
})

//handle the express routes.
readdirSync('./routes').map(route =>
	app.use('/api', require(`./routes/${route}`))
)

//export the app.
export default app
