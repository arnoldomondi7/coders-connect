import React from 'react'
import { Posts } from '../../data'
import OSingleAccountPost from '../OSingleAccountPost/OSingleAccountPost.comp'

const SingleAccountPost = () => {
	return (
		<div className='nAPost'>
			<div className='nAShareDiv'>
				{Posts.map((post, i) => {
					return <OSingleAccountPost post={post} key={i} />
				})}
			</div>
		</div>
	)
}

export default SingleAccountPost
