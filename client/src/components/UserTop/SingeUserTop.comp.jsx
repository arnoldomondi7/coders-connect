import React, { useEffect } from 'react'
import {
	faBell,
	faMessage,
	faPerson,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SingeUserTop = () => {
	//handle the navigate, hooks.
	const navigate = useNavigate()
	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null

	//handle the logout.
	const handleLogout = async () => {
		//empty the local storage.
		window.localStorage.removeItem('userInfo')
		//log a sucess message.
		toast.success('Logged Out')
		//redirect to the, login page.
		navigate('/login')
	}

	useEffect(() => {
		if (!userInfo) {
			navigate('/login')
		}
	}, [userInfo, navigate])

	return (
		<div className='topNav'>
			{/* step1 */}
			<div className='topNavLeft'>
				<Link to='/' activeclassname='active'>
					<h2 className='logo'>Coders-Connect</h2>
				</Link>

				<div className='topSearch'>
					<input type='text' placeholder='Search Anything...' />
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>

			{/* step 2 */}
			<div className='topNavMiddle'>
				<div className='topNavLinks'>
					<ul>
						<li>
							<NavLink to='/' activeclassname='active'>
								Home
							</NavLink>
						</li>
						{userInfo && (
							<li>
								<NavLink to='/friends' activeclassname='active'>
									Friends
								</NavLink>
							</li>
						)}
					</ul>
				</div>
			</div>

			{/* step 3 */}
			<div className='topNavRight'>
				{userInfo && (
					<>
						<div className='topNavNotifications'>
							<div className='topNavNotification'>
								<FontAwesomeIcon icon={faPerson} />
								<span className='badge'>1</span>
							</div>

							<div className='topNavNotification'>
								<FontAwesomeIcon icon={faMessage} />
								<span className='badge'>4</span>
							</div>

							<div className='topNavNotification'>
								<FontAwesomeIcon icon={faBell} />
								<span className='badge'>1</span>
							</div>
						</div>
					</>
				)}

				<div className='user'>
					{userInfo ? (
						<>
							<Link to='/account'>
								<img
									src={`../${userInfo.imageProfile}`}
									alt={userInfo.username}
									className='userImage'
								/>
							</Link>
							<span className='userLogout' onClick={handleLogout}>
								Logout
							</span>
						</>
					) : (
						<NavLink to='/login' activeclassname='active' className='auth'>
							Login
						</NavLink>
					)}
				</div>
			</div>
		</div>
	)
}

export default SingeUserTop
