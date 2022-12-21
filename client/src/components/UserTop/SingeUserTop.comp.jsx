import {
	faBell,
	faMessage,
	faPerson,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SingeUserTop = () => {
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
						<li>
							<NavLink to='/friends' activeclassname='active'>
								Friends
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			{/* step 3 */}
			<div className='topNavRight'>
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

				<div className='user'>
					<Link to='/account'>
						<img
							src='../assets/user/anodi.jpg'
							alt='anodi'
							className='userImage'
						/>
					</Link>
					<span className='userLogout'>Logout</span>
				</div>
			</div>
		</div>
	)
}

export default SingeUserTop
