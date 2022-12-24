import React, { useEffect, useState } from 'react'
import Post from '../Post/Post.comp'
import Share from '../Share/Share.comp'
import Story from '../Story/Story.comp'
import axios from 'axios'
import './newsfeed.css'

const Newsfeed = () => {
	//initialy the posts is an empty array.
	//the array helps us edit it.
	const [posts, setPosts] = useState([])

	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null

	//get all post on page start.
	useEffect(() => {
		const fetchPosts = async () => {
			const resultPost = await axios.get(
				`${process.env.REACT_APP_API}/all/${userInfo._id}`
			)

			//update the state.
			setPosts(
				resultPost.data.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt)
				})
			)
		}

		//call the function.
		fetchPosts()
	}, [userInfo._id])

	return (
		<div className='newsfeed'>
			<Story />
			<Share />
			{posts.map((post, i) => {
				return <Post post={post} key={i} />
			})}
		</div>
	)
}

export default Newsfeed
