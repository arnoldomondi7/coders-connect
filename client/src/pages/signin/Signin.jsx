import React from 'react'
import './signin.css'
import Button from '@mui/material/Button'

const Signin = () => {
    return (
        <div className='signin'>
            <div className="signinWrapper">
                <div className="signInLeft">
                    <h3 className="signInLogo">Coders Connect</h3>
                    <span className="siginDesc">Connecting Developers</span>
                </div>
                <div className="signInRight">
                    <div className="signInBox">
                        <input type="email" className="signinInput" placeholder='Enter Email' />
                        <input type="password" className="signinInput" placeholder='Enter Password' />
                        <button className="signInButton">Sign In</button>
                        <span className="resetPassword">Forgot Password?</span>
                        <button className="signInRegisterButton">Create A New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin