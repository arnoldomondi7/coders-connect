import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {

        //generate the salt.
        bcrypt.genSalt(12, (error, salt) => {

            //handle the error.
            if (error) {
                return reject(error)
            }

            //if ok, hash the password.
            bcrypt.hash(password, salt, (error, hash) => {

                //handle the error.
                if (error) {
                    return reject(error)
                }

                //if ok, hash the password.
                resolve(hash)
            })
        })
    })
}

//compare the password saved and the new.
export const comparePassword = (password, savedPassword) => {
    return (
        bcrypt.compare(password, savedPassword)
    )
}
