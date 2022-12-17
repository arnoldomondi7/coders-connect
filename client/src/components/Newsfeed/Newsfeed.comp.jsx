import React from 'react'
import Share from '../Share/Share.comp'
import Story from '../Story/Story.comp'
import './newsfeed.css'

const Newsfeed = () => {
	return (
		<div className='newsfeed'>
			<Story />
			<Share />
		</div>
	)
}

export default Newsfeed
