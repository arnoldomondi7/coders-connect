import React, { useEffect, useState } from 'react'
import SingleOnlineFriends from '../SingleOnlineFriends/SingleOnlineFriends.comp'
import axios from 'axios'

const SingleRightBar = () => {
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
			<h4 className='online'>Online Friends</h4>
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

export default SingleRightBar
