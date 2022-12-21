import React from 'react'
import { Link } from 'react-router-dom'

// components that has the user details
const AddNewFriends = ({ user }) => {
	return (
		<Link to='/user/112233'>
			<div className='friendsGroup'>
				<img
					className='friendsImg'
					src={user.profileImage}
					alt={user.username}
				/>
				<p className='friendsName'>{user.username}</p>
				<button>Follow</button>
			</div>
		</Link>
	)
}

export default AddNewFriends
