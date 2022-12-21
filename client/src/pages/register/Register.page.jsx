import React from 'react'
import './register.css'

const Register = () => {
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
					<form>
						<div className='formGroup'>
							<input type='email' placeholder='Username' />
						</div>
						<div className='formGroup'>
							<input type='email' placeholder='Email or Phone number' />
						</div>
						<div className='formGroup'>
							<input type='password' placeholder='password' />
						</div>

						<div className='formGroup'>
							<input type='password' placeholder='re-type password' />
						</div>

						<div className='formGroup form-btnLogin'>
							<button>Register Account</button>
						</div>

						<div className='formGroup form-btnRegister'>
							<button>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
