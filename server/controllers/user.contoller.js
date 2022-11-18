import User from '../models/user.model'
import { hashPassword } from '../helpers'
import _ from 'lodash'

//create the user.
export const createUser = async (req, res) => {
    //get data from the users.
    const { name, email, password } = req.body

    //handle the error handling.
    if (!name) {
        return res.json({
            error: 'Please Enter The Users Name'
        })
    }

    if (!password || password.length < 8) {
        return res.json({
            error: 'Invalid Credentials, Use * characters'
        })
    }

    //check the email to ensure that it doesnt exist.
    const check = await User.findOne({ email })

    //handle the error to ensure that it doesnt exist.
    if (check) {
        return res.json({
            error: 'User Already Exists, Please Use Another Email'
        })
    }

    //hash the password.
    const hashedPassword = await hashPassword(password)

    //create new user if it doesnt exist.
    const user = new User({ name, email, password: hashedPassword })
    try {

        //save the user.
        await user.save()

        //log a success message to the user
        res.json({
            message: `${name}, Was Successfully Created`
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: 'Unable to create new user, try again'
        })
    }
}

//get all the users.
export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('name email updated created')

        //send the data to the frontend.
        res.json(users)
    } catch (error) {
        console.log(error)
        return res.json({
            error: 'Unable to get the users, try again'
        })
    }
}

//get the user by the id.
export const userById = async (req, res, id, next) => {
    try {
        //find the user by id.
        const user = await User.findById(id)

        //ensure that the user exist.
        //if it doesnt exist, show the error
        if (!user) {
            return res.json({
                error: 'Unable to get the user by Id, try again'
            })
        }

        //merge with he req.profile.
        req.profile = user

        //go to the next concept.
        next()
    } catch (error) {
        console.log(error)
        return res.json({
            error: 'Unable to get the user by Id, try again'
        })
    }
}

//get a single user
export const getUser = (req, res) => {
    try {

        //by now you have access to the user.
        //block the password.
        req.profile.password = undefined

        //send the response to the user.
        res.json(req.profile)
    } catch (error) {
        console.log(error)
        return res.json({
            error: 'Unable to get the user, try again'
        })
    }
}

//update the user
export const updateUser = async (req, res) => {
    try {
        //put the req.profile data in the user var
        let user = req.profile
        //update the data in user by extend in lodash
        user = _.extend(user, req.body)
        //update the data.
        user.updated = Date.now()
        //save the new data.
        await user.save()
        //dissable the password.
        user.password = undefined
        //send res to the user.
        res.json(user)

    } catch (error) {
        console.log(error)
        return res.json({
            error: 'Unable To Update The User, Please Try Again'
        })
    }
}

//delete the user
export const deleteUser = async (req, res) => {
    try {
        let user = req.profile

        await user.remove()

        //sanitize the password.
        user.password = undefined

        //send to the user.
        res.json({
            message: `${user.name}, Was Successfully Deleted`
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: 'Unable To Delete The User, Please try Again'
        })
    }
}




