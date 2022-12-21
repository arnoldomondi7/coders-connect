import React from 'react'
import { Link } from 'react-router-dom'

const MyFriends = ({ user }) => {
	return (
		// go the spcific user profile
		<Link to='/user/112233'>
			<div className='friendsGroup'>
				<img
					className='friendsImg'
					src={user.profileImage}
					alt={user.username}
				/>
				<p className='friendsName'>{user.username}</p>
				<button>unfollow</button>
			</div>
		</Link>
	)
}

export default MyFriends
