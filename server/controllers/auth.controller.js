import User from '../models/user.model'

export const signUp = async (req, res) => {
    //test the endpoint.
    const user = new User({
        username: 'Ali',
        email: 'ali@gmail.com',
        password: '09876543'
    })

    //save the data.
    await user.save()

    res.send('fine')
}