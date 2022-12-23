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

	//get all post on page start.
	useEffect(() => {
		const fetchPosts = async () => {
			const resultPost = await axios.get(
				`${process.env.REACT_APP_API}/all/63a4c52c1300e6e4e47e835c`
			)

			//update the state.
			setPosts(resultPost.data)
			console.log('Posts==>', resultPost.data)
		}

		//call the function.
		fetchPosts()
	}, [])

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
