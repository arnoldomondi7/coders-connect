import express from 'express'


const router = express.Router()

//data from the controller function.
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from '../controllers/user.controller'

//update the user
router.put('/update/:id', updateUser)

//delete the user.
router.delete('/delete/:id', deleteUser)

//get a single user.
router.get('/user/:id', getUser)

//follow a user.
router.put('/follow/:id', followUser)

//unfollow a user.
router.put('/unfollow/:id', unFollowUser)

//export the router.
module.exports = router