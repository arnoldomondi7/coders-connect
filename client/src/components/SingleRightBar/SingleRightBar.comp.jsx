import React from 'react'
import { Users } from '../../data'
import SingleOnlineFriends from '../SingleOnlineFriends/SingleOnlineFriends.comp'

const SingleRightBar = () => {
	return (
		<div className='rightbar'>
			<h4 className='online'>Online Friends</h4>
			<div className='onlineGroups'>
				{Users.map((user, i) => (
					<SingleOnlineFriends user={user} key={i} />
				))}
			</div>
		</div>
	)
}

export default SingleRightBar
