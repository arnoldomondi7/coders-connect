import express from 'express'

const router = express.Router()

//test the route.
router.get('/users/', (req, res) => {
    res.send('welcome to the home page')
})


//export the router.
module.exports = router