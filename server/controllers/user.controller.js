import User from '../models/user.model'
import { hashPassword } from '../utils/index.utils'

export const updateUser = async (req, res) => {

    try {

        //check if userid is same as the id of the person sending the params.
        if (req.body.userId === req.params.id || req.body.isAdmin) {

            //handle pasword update.
            if (req.body.password) {
                try {

                    //hash the password.
                    req.body.password = await hashPassword(req.body.password)
                } catch (error) {
                    console.log(error)
                    return res.status(400).send(error)
                }
            }

            //update the user.
            try {

                //get the user then update the user.
                //$set is used to update the body
                await User.findByIdAndUpdate(req.params.id, { $set: req.body })

                //send the res to the user.
                res.status(200).send('User Account Was Updated')
            } catch (error) {
                console.log(error)
                return res.status(400).send(error)
            }

        } else {

            //if not true.
            res.status(400).send('You can only update your account.')
        }


    } catch (error) {
        console.log(error)
    }
}

//delete the user.
export const deleteUser = async (req, res) => {

    try {

        //check if userid is same as the id of the person sending the params.
        if (req.body.userId === req.params.id || req.body.isAdmin) {

            //update the user.
            try {

                //get the user then update the user.
                //$set is used to update the body
                await User.findByIdAndDelete(req.params.id)

                //send the res to the user.

                res.status(200).send('User Account Has Been Deleted')
            } catch (error) {
                console.log(error)
                return res.status(400).send(error)
            }

        } else {

            //if not true.
            res.status(400).send('You can only Delete your account.')
        }


    } catch (error) {
        console.log(error)
    }
}

//get a single user.
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        //determine data that should not be updated.
        const { password, isAdmin, updatedAt, ...other } = user._doc

        //log a success message.
        res.status(200).send(other)
    } catch (error) {
        console.log(error)
    }
}

//follow user.
export const followUser = async (req, res) => {

    //ensure the user being followed is not the same as the person following
    if (req.body.userId !== req.params.id) {
        try {

            //get the user.
            const user = await User.findById(req.params.id)

            //get the current user.
            const currentUser = await User.findById(req.body.userId)

            //handle the update.
            if (!user.follwers.includes(req.body.userId)) {

                //update the user
                await user.updateOne({ $push: { follwers: req.body.userId } })

                //update the current user following.
                await currentUser.updateOne({ $push: { following: req.params.id } })

                //send the res.
                res.status(200).send('You Are Now Following this User')
            } else {
                res.status(400).send('You Already Follow This User')
            }

        } catch (error) {
            console.log(error)
        }
    }
}

//follow user.
export const unFollowUser = async (req, res) => {

    //ensure the user being followed is not the same as the person following
    if (req.body.userId !== req.params.id) {
        try {

            //get the user.
            const user = await User.findById(req.params.id)

            //get the current user.
            const currentUser = await User.findById(req.body.userId)

            //handle the update.
            //if its there then unfollow
            if (user.follwers.includes(req.body.userId)) {

                //update the user
                await user.updateOne({ $pull: { follwers: req.body.userId } })

                //update the current user following.
                await currentUser.updateOne({ $pull: { following: req.params.id } })

                //send the res.
                res.status(200).send('You Unfollowed this User')
            } else {
                res.status(400).send('You Already unfollowed This User')
            }

        } catch (error) {
            console.log(error)
        }
    }


}