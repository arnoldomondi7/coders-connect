import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import './newsingacc.css'
import { format } from 'timeago.js'

const NewSingAccPost = ({ post }) => {
	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null

	const [isLiked, setisLiked] = useState(false)
	const [users, setUsers] = useState({})
	const [like, setLike] = useState(post.likes.length)

	//handle the likes.
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1)
		//will toggle
		//if true get it to false, if false get it to true
		setisLiked(!isLiked)
	}

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
		<div className='nsap'>
			<div className='nsapGroups'>
				<div className='nsapGroup'>
					{/* card header */}
					<div className='nsapCardHeader'>
						<div className='nsapCardHeaderLeft'>
							<img
								src={users.imageProfile}
								alt={users.username}
								className='nsapUserImage'
							/>
							<div className='nsapInfo'>
								<span className='nsapUserName'>{users.username}</span>
								<span className='nsapDate'>{format(post.createdAt)}</span>
							</div>
						</div>
						<div className='nsapCardHeaderRight'>
							<FontAwesomeIcon icon={faEllipsis} />
						</div>
					</div>

					{/* card body */}
					<div className='nsapCardBody'>
						<p className='nsapText'>{post?.description}</p>
						<img src={`../${post?.postImage}`} className='nsapImg' alt='' />
					</div>

					{/* card Footer */}
					<div className='nsapCardFooter'>
						<div className='nsapCardFooterLeft'>
							{isLiked ? (
								<img
									src='../assets/icons/heartred.png'
									alt='assets'
									className='nsapIconImg'
									onClick={likeHandler}
								/>
							) : (
								<img
									src='../assets/icons/heartwhite.png'
									alt='assets'
									className='nsapIconImg'
									onClick={likeHandler}
								/>
							)}

							<span className='nsapCounter'>{like} Likes</span>
						</div>
						<div className='nsapCardFooterRight'>
							<img
								src='../assets/icons/comment.png'
								alt='assets'
								className='nsapIconImg'
							/>
							<span className='nsapCounter'>{post.comments} comments</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewSingAccPost
