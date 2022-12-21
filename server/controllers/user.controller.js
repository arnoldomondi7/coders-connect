import User from '../models/user.model'
import bcrypt from 'bcryptjs'

//register the user.
export const register = async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		userauth: req.body.userauth,
		password: bcrypt.hashSync(req.body.password),
	})

	//save the data.
	const user = await newUser.save()

	//send the data to the front end.
	res.status(201).send({
		_id: user._id,
		username: user.username,
		userauth: user.userauth,
	})
}

//login the user.
export const login = async (req, res) => {
	//find if the email already exists.
	const user = await User.findOne({ userauth: req.body.userauth })

	//handle the error if the user does not exists.
	if (user) {
		//hash the password.
		if (bcrypt.compareSync(req.body.password, user.password)) {
			//give access
			res.status(200).send({
				_id: user._id,
				username: user.username,
				userauth: user.userauth,
			})
		}
	} else {
		res.status(400).send({
			error: 'Unable to Login',
		})
	}
}
