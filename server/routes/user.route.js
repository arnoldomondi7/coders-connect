import express from 'express'
import formidable from 'formidable'

//controller function
import {
    addFollower,
    addFollowing,
    createUser,
    deleteUser,
    getUser,
    getUsers,
    removeFollower,
    removeFollowing,
    updateUser,
    userById
} from '../controllers/user.contoller'

//middlewares to handle.

import { hasAuthorization, requireSignIn } from '../middlewares/auth.middleware'

const router = express.Router()

//sign up
router.route('/signup').post(createUser)
//sign in
router.route('/users').get(getUsers)

//get user, update user, delete user
router.route('/user/:userId')
    .get(requireSignIn, getUser)
    .put(requireSignIn, hasAuthorization, updateUser)
    .delete(requireSignIn, hasAuthorization, deleteUser)

//follow and unfollow
router.route('/users/follow')
    .put(requireSignIn,
        addFollowing,
        addFollower)

router.route('/users/unfollow')
    .put(requireSignIn,
        removeFollowing,
        removeFollower)

//handle the userId.
router.param('userId', userById)

//export the routes.
module.exports = router

