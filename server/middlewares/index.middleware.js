import { expressjwt } from 'express-jwt'
import config from '../config/config.config'

//only signed in users allowed.
export const requireSignin = expressjwt({
    secret: config.jwtSecret,
    algorithms: ['HS256']
})


//has the authorization
export const hasAuthorization = (req, res, next) => {
    try {
        const authorized = req.profile && req.auth && req.profile._id == req.auth._id

        //handle the error.
        if (!authorized) {
            return res.json({
                error: 'User Is Not Authorized To Access This Resource'
            })
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

