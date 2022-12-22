import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
	//handle the naviaget
	const navigate = useNavigate()

	//handle the state.
	const [userauth, setUserauth] = useState('')
	const [password, setPassword] = useState('')

	//code to handle for registration.
	const handleLogin = async event => {
		event.preventDefault()
		try {
			const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, {
				userauth,
				password,
			})

			if (data.error) {
				return toast.error(data.error)
			}
			//store the userinfo in the local storage.
			//data from backend should be converted to javascript objects
			//thus use, JSON.stringify(data)
			window.localStorage.setItem('userInfo', JSON.stringify(data))

			//log a success message.
			toast.success('Successfully Signed In')

			//re-direct to the homepage.
			navigate('/')
		} catch (error) {
			toast.error(error.message)
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
					<form onSubmit={handleLogin}>
						<div className='formGroup'>
							<input
								required
								onChange={event => setUserauth(event.target.value)}
								type='email'
								placeholder='Enter Email'
							/>
						</div>
						<div className='formGroup'>
							<input
								required
								onChange={event => setPassword(event.target.value)}
								type='password'
								placeholder='password'
							/>
						</div>

						<div className='formGroup form-btnLogin'>
							<button>Login</button>
						</div>

						<div className='formGroup form-btnRegister'>
							<Link to='/register'>
								<button>Create A New Account</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
