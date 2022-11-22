import User from '../models/user.model'
import { hashPassword } from '../helpers/auth.helper'

export const signUp = async (req, res) => {
    //destructure the data from the frontend.
    const { username, email, password } = req.body
    try {

        //handle error.
        if (!username) {
            return res.json({
                error: 'Username Is Required'
            })
        }

        //check to see if the email already exist.
        const match = await User.findOne({ email })

        //handle the error
        if (match) {
            return res.json({
                error: 'Please, pick another email'
            })
        }

        if (!password || password.length < 8) {
            return res.json({
                error: 'Invalid Password, make sure its at least 8 characters'
            })
        }

        //hash password.
        const hashPwd = await hashPassword(password)
        const user = new User({ username, email, password: hashPwd })

        //save the user.
        await user.save()

        //send the data to the frontend.
        res.status(201).json(user)

    } catch (error) {
        console.log(error)
    }
}

//login the user.
export const signIn = async (req, res) => {
    //test endpoint.
    console.log(req.body)
}