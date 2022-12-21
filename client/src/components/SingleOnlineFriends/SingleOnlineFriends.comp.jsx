import React from 'react'

const SingleOnlineFriends = ({ user }) => {
	return (
		<div className='onlineGroup'>
			<div className='onlineGroupLeft'>
				<img
					src={`../${user.profileImage}`}
					alt={user.username}
					className='onlineUserImage'
				/>
				<div className='onlineBadge'></div>
			</div>
			<div className='onlineGroupRight'>
				<span className='onlineUserName'>{user.username}</span>
			</div>
		</div>
	)
}

export default SingleOnlineFriends
