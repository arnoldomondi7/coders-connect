import { hashPassword } from '../helpers/auth.helper'
import User from '../models/user.model'


export const updateUser = async (req, res) => {
    const { userId, password, isAdmin } = req.body

    // compare the userId and the id in params.
    //only the user and admin can update the account.
    if (userId === req.params.id || isAdmin) {
        //compare the password.
        if (password) {
            try {
                //hash the password.
                const hashedPwd = await hashPassword(password)

            } catch (error) {
                console.log(error)
                return res.json(error)
            }
        }

        //now update the user.
        try {
            //find by user and update the user.
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })

            //log success.
            res.json({
                message: 'Account Has Been Updated'
            })
        } catch (error) {
            res.json(error)
        }
    } else {
        return res.json({
            error: 'You Can Only Update Your Account'
        })
    }
}



export const deleteUser = async (req, res) => {
    const { userId, isAdmin } = req.body

    // compare the userId and the id in params.
    //only the user and admin can update the account.
    if (userId === req.params.id || isAdmin) {

        //now update the user.
        try {
            //find by user and update the user.
            await User.findByIdAndDelete(req.params.id)

            //log success.
            res.json({
                message: 'Account Has Been Deleted Successfully'
            })
        } catch (error) {
            res.json(error)
        }
    } else {
        return res.json({
            error: 'You Can Only Delete Your Account'
        })
    }
}

//get a single user.
export const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)

        //filter data.
        const { password, _id, updatedAt, ...other } = user._doc

        //send the res to the user.
        res.json(other)
    } catch (error) {
        return res.json({
            error: 'You Can Only Delete Your Account'
        })
    }
}

// follow a user.
export const followUser = async (req, res) => {
    const { userId } = req.body

    try {
        //compare the userId and the param id.
        //you cant follow yourself so the id should be different.
        if (userId !== req.params.id) {
            try {
                //this is the user you want to follow.
                const user = await User.findById(req.params.id)
                //this is the current user.
                const currentUser = await User.findById(userId)

                //check if the user you want to follow has followers.
                if (!user.followers.includes(userId)) {
                    //update the user with a new follower.
                    await user.updateOne({ $push: { followers: userId } })
                    //update the current user following list.
                    await currentUser.updateOne({ $push: { following: req.params.id } })

                    //send res to the user.
                    res.json({
                        message: `You Are Now Following ${user.username}`
                    })
                } else {
                    res.json({
                        error: `You Already Follow  ${user.username}`
                    })
                }
            } catch (error) {
                res.json(error)
            }
        } else {
            res.json(error)
        }
    } catch (error) {
        console.log(error)
    }
}


// unfollow a user.
export const unfollowUser = async (req, res) => {
    const { userId } = req.body

    try {
        //compare the userId and the param id.
        //you cant follow yourself so the id should be different.
        if (userId !== req.params.id) {
            try {
                //this is the user you want to follow.
                const user = await User.findById(req.params.id)
                //this is the current user.
                const currentUser = await User.findById(userId)

                //check if the user you want to follow has followers.
                if (user.followers.includes(userId)) {
                    //update the user with a new follower.
                    await user.updateOne({ $pull: { followers: userId } })
                    //update the current user following list.
                    await currentUser.updateOne({ $pull: { following: req.params.id } })

                    //send res to the user.
                    res.json({
                        message: `You Are Now Unfollowing ${user.username}`
                    })
                } else {
                    res.json({
                        error: `You Already Unfollowed  ${user.username}`
                    })
                }
            } catch (error) {
                res.json(error)
            }
        } else {
            res.json({
                error: 'You Cant Follow Yourself'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
