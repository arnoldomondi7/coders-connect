import React from 'react'
import { Users } from '../../../data'

const Newstory = ({ story }) => {
	return (
		<div className='storyGroup'>
			<div className='storyDiv'>
				<div className='storyUserAddImgDiv'>
					{/* profile of the user */}
					<img
						src={
							Users.filter(user => user.id === story?.userId)[0].profileImage
						}
						alt=''
						className='storyUserAddImg'
					/>
				</div>
				<div className='storyUser'>
					{/* actual story is here */}
					<img src={story.storyImage} alt='' className='storyUserImage' />
				</div>
				<div className='storyUserTitle'>
					<h5>
						{' '}
						{Users.filter(user => user.id === story?.userId)[0].username}
					</h5>
				</div>
			</div>
		</div>
	)
}

export default Newstory
