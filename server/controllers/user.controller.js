import User from '../models/user.model'
import bcrypt from 'bcryptjs'

//register the user.
export const register = async (req, res) => {
	//get data from the frontend.
	const { username, userauth, password, imageCover } = req.body

	//handle the validation.
	if (!username) {
		return res.json({
			error: 'Name Is Required',
		})
	}

	if (!password || password.length < 8) {
		return res.json({
			error: 'Password Should Be At least 8 Characters',
		})
	}

	//ensure that the email does not exist.
	const exist = await User.findOne({ userauth })

	//logic to log an error if the email already exists.
	if (exist) {
		return res.json({
			error: 'Email Is Already In Use, Pick A New Email',
		})
	}

	//hash the password.
	const hashedPassword = bcrypt.hashSync(password)

	//if not, create a new user.
	const user = new User({
		username,
		userauth,
		password: hashedPassword,
		imageProfile: req.body.imageProfile || './assets/user/defaultdp.png',
		imageCover: req.body.imageCover || './assets/account/evening.jpg',
	})

	//save the user.
	try {
		await user.save()

		//send the data to the front end.
		res.status(201).send({
			_id: user._id,
			username: user.username,
			userauth: user.userauth,
			imageProfile: user.imageProfile,
			imageCover: user.imageCover,
			followings: user.followings,
			followers: user.followers,
		})
	} catch (error) {
		return res.json({
			error: 'Unable To Sign In The User.',
		})
	}
}

//login the user.
export const login = async (req, res) => {
	//destructure the details from the frontend
	const { userauth, password } = req.body

	try {
		//check to ensure that the email exists.
		const user = await User.findOne({ userauth })

		//handle the error to ensure that the email exists.
		if (!user) {
			return res.json({
				error: 'User Does Not Exist, Please Sign Up',
			})
		}

		//if email is ok, then compare the password.
		//compare the password, with that saved in the db.
		const match = bcrypt.compareSync(password, user.password)

		//handle the error.
		//ensure that indeed the passwords match.
		if (!match) {
			return res.json({
				error: 'Invalid Password, Please Try Again',
			})
		}

		//send the id,email, name,token,
		return res.send({
			_id: user._id,
			username: user.username,
			userauth: user.userauth,
			imageProfile: user.imageProfile,
			imageCover: user.imageCover,
			followings: user.followings,
			followers: user.followers,
		})
	} catch (error) {
		return res.json({
			error: 'Unable To Sign In, Please Try Again.',
		})
	}
}

//get a single user.

export const getSingleUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)

		//handle the logic.
		if (user) {
			//send res to the frontend.
			return res.send(user)
		}

		//log an error message/
		res.status(400).send({ message: 'User was Not Found' })
	} catch (error) {
		return res.json({
			error: 'Unable To Get A User, Please Try Again.',
		})
	}
}
