import React from 'react'
import Post from '../Post/Post.comp'
import Share from '../Share/Share.comp'
import Story from '../Story/Story.comp'
import './newsfeed.css'

const Newsfeed = () => {
	return (
		<div className='newsfeed'>
			<Story />
			<Share />
			<Post />
		</div>
	)
}

export default Newsfeed
