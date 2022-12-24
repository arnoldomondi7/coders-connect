import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './rightbar.css'
import SingleOnlineFriends from '../SingleOnlineFriends/SingleOnlineFriends.comp'

const Rightbar = () => {
	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null

	const [users, setUsers] = useState({})

	//get all post on page start /single-user/:id.
	useEffect(() => {
		const fetchUsers = async () => {
			const resultPost = await axios.get(
				`${process.env.REACT_APP_API}/${userInfo._id}`
			)

			//update the state.
			setUsers(resultPost.data)
		}

		//call the function.
		fetchUsers()
	}, [userInfo._id])
	return (
		<div className='rightbar'>
			<div className='online'>
				{' '}
				{userInfo.followings.length === 0 ? (
					<h4>No Online Friends</h4>
				) : (
					<h4>Online Friends</h4>
				)}
			</div>
			<div className='onlineGroups'>
				{userInfo.followings.length === 0 ? (
					<span> Follow Friends To See Them</span>
				) : (
					users.map((user, i) => <SingleOnlineFriends user={user} key={i} />)
				)}
			</div>
		</div>
	)
}

export default Rightbar
