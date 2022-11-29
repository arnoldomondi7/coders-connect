import User from '../models/user.model'
import { comparePassword, hashPassword } from '../utils/index.utils'

//register user.
export const signUp = async (req, res) => {
    const { username, email, password } = req.body

    const newUser = new User({
        username,
        email,
        password: await hashPassword(password)
    })

    //save new user.
    try {
        const user = await newUser.save()

        //send response
        res.status(201).send(user)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

//signin user.
export const signIn = async (req, res) => {

    //get the user and the password from the user.
    const { email, password } = req.body

    try {

        //llook if the user exists.
        const user = await User.findOne({ email })

        //handle error if the user does not exist.
        if (!user) {
            return res.status(404).send('User Not Found')
        }

        //compare the password.
        const comparePwd = await comparePassword(password, user.password)

        //handle the error if the password is not valid.
        if (!comparePwd) {
            return res.status(400).send('Invalid Credentials')
        }

        //send the success log to the user.
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}