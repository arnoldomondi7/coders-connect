import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBell,
	faMessage,
	faPerson,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './topnav.css'

const Topnav = () => {
	return (
		<div className='topNav'>
			<div className='topNavLeft'>
				<h2 className='logo'>Codders-Connect</h2>
				<div className='topNavSearch'>
					<input type='text' placeholder='Search Anything' />
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>
			<div className='topNavMiddle'>
				<div className='topNavLinks'>
					<ul>
						<li>
							<NavLink to='/' activeclassname='active'>
								{' '}
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/friends' activeclassname='active'>
								{' '}
								Friends
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className='topNavRight'>
				<div className='notifications'>
					<div className='notification'>
						<FontAwesomeIcon icon={faPerson} />
						<span className='badge'>1</span>
					</div>

					<div className='notification'>
						<FontAwesomeIcon icon={faMessage} />
						<span className='badge'>4</span>
					</div>

					<div className='notification'>
						<FontAwesomeIcon icon={faBell} />
						<span className='badge'>1</span>
					</div>
				</div>

				<div className='user'>
					{/* <img src='./assets/user/anodi.jpg' alt='anodi' className='userImg' /> */}
					<span className='userLogout'>Logout</span>
				</div>
			</div>
		</div>
	)
}

export default Topnav
