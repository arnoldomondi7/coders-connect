import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    return (
        new Promise((resolve, reject) => {
            //handle the salting.
            bcrypt.genSalt(12, (error, salt) => {
                //handle the error.
                if (error) {
                    return reject(error)
                }

                //handle the hash.
                bcrypt.hash(password, salt, (error, hash) => {
                    //handle the error
                    if (error) {
                        return reject(error)
                    }

                    //handle the hash.
                    resolve(hash)
                })
            })
        })
    )
}

//compare the password.
export const comparePassword = (password, hashedPassword) => {
    return (
        bcrypt.compare(password, hashedPassword)
    )
}