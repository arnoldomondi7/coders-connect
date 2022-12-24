import React, { useEffect, useState } from 'react'
import NewSingAccPost from '../NewSingAccPost/NewSingAccPost.comp'
import Share from '../Share/Share.comp'
import axios from 'axios'

//this referes to a single user.
const NewAccountPost = () => {
	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null
	//the array helps us edit it.
	const [posts, setPosts] = useState([])

	//get all post on page start.
	useEffect(() => {
		const fetchPosts = async () => {
			const resultPost = await axios.get(
				`${process.env.REACT_APP_API}/all/${userInfo._id}`
			)

			//update the state.
			setPosts(resultPost.data)
			console.log('Posts==>', resultPost.data)
		}

		//call the function.
		fetchPosts()
	}, [userInfo._id])
	return (
		<div className='nAPost'>
			<div className='nAShareDiv'>
				<Share />
				{posts.map((post, i) => {
					return <NewSingAccPost post={post} key={i} />
				})}
			</div>
		</div>
	)
}

export default NewAccountPost
