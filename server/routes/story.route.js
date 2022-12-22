import express from 'express'

const router = express.Router()

//data from the controller component.
import { createStory } from '../controllers/story.controller'

//register the user.
router.post('/create-story', createStory)

//export the router
module.exports = router
