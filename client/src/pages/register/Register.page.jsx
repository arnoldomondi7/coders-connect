import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './register.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
	//handle the naviaget
	const navigate = useNavigate()

	//handle the state.
	const [username, setUsername] = useState('')
	const [userauth, setUserauth] = useState('')
	const [password, setPassword] = useState('')
	const [retypePassword, setRetypePassword] = useState('')

	//code to handle for registration.
	const handleRegister = async event => {
		event.preventDefault()

		//handle error if the password is not the same.
		if (password !== retypePassword) {
			return toast.error('Passwords Do Not Match, Please try Again')
		}

		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_API}/register`,
				{
					username,
					userauth,
					password,
				}
			)

			//handle the error.
			if (data.error) {
				return toast.error(data.error)
			}

			//log a success message.
			toast.success(`${username}, was Successfully Registered`)

			navigate('/login')
		} catch (error) {
			toast.error('Error, ')
		}
	}

	//ensure once logged in this page cant be accessed.
	useEffect(() => {
		if (window.localStorage.getItem('userInfo')) {
			navigate('/')
		}
	}, [navigate])
	return (
		<div className='form'>
			<div className='formGroups'>
				<div className='formLeft'>
					<h4 className='formSubTitle'>
						Connect With Other Developers On Coders-Connect
					</h4>
					<h1 className='formTitle'>Coders-Connect</h1>
				</div>
				<div className='formRight'>
					<form onSubmit={handleRegister}>
						<div className='formGroup'>
							<input
								onChange={event => setUsername(event.target.value)}
								type='text'
								required
								placeholder='Username'
							/>
						</div>
						<div className='formGroup'>
							<input
								onChange={event => setUserauth(event.target.value)}
								type='email'
								required
								placeholder='Enter Email'
							/>
						</div>
						<div className='formGroup'>
							<input
								onChange={event => setPassword(event.target.value)}
								type='password'
								required
								placeholder='Enter Password'
							/>
						</div>

						<div className='formGroup'>
							<input
								onChange={event => setRetypePassword(event.target.value)}
								type='password'
								required
								placeholder='Re-Type Password'
							/>
						</div>

						<div className='formGroup form-btnLogin'>
							<button>Register Account</button>
						</div>

						<div className='formGroup form-btnRegister'>
							<Link to='/login'>
								<button>Login</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
