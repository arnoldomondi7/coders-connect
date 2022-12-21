import React from 'react'
import { Posts } from '../../data'
import NewSingAccPost from '../NewSingAccPost/NewSingAccPost.comp'
import Share from '../Share/Share.comp'

const NewAccountPost = () => {
	return (
		<div className='nAPost'>
			<div className='nAShareDiv'>
				<Share />
				{Posts.map((post, i) => {
					return <NewSingAccPost post={post} key={i} />
				})}
			</div>
		</div>
	)
}

export default NewAccountPost
