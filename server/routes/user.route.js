import express from 'express'

const router = express.Router()

//controllers
import {
    deleteUser,
    followUser,
    getUser,
    unfollowUser,
    updateUser
} from '../controllers/user.controller'

//get the user
router.get('/user/:id', getUser)
//update the user.
router.put('/update/:id', updateUser)
//delete the user.
router.delete('/delete/:id', deleteUser)
//follow the user.
router.put('/follow/:id', followUser)
//unfollow the user
router.put('/unfollow/:id', unfollowUser)

//export the router.
module.exports = router