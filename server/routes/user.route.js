import express from 'express'

const router = express.Router()

//data from the controller.
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    userById
} from '../controllers/user.contoller'

//middleware to handle the requests.
import { hasAuthorization, requireSignin } from '../middlewares/index.middleware'

//create the user.
router.route('/signup').post(createUser)

//read the users.
router.route('/users').get(getUsers)

//get access to the user.
//get the user. //update the user //delete the users
router.route('/user/:userId')
    .get(requireSignin, getUser)
    .put(requireSignin, hasAuthorization, updateUser)
    .delete(requireSignin, hasAuthorization, deleteUser)

//handle the user.
router.param('userId', userById)

//export the router.
module.exports = router