import React from 'react'
import { Posts } from '../../data'
import Post from '../Post/Post.comp'
import Share from '../Share/Share.comp'
import Story from '../Story/Story.comp'
import './newsfeed.css'

const Newsfeed = () => {
	return (
		<div className='newsfeed'>
			<Story />
			<Share />
			{Posts.map((post, i) => {
				return <Post post={post} key={i} />
			})}
		</div>
	)
}

export default Newsfeed
