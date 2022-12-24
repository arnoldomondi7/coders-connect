import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { format } from 'timeago.js'
import axios from 'axios'
import './post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
	//get the display pictures.
	//initially an empty object.
	const [users, setUsers] = useState({})
	const [like, setLike] = useState(post.likes.length)
	const [isLiked, setisLiked] = useState(false)

	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null

	useEffect(() => {
		setisLiked(post.likes.includes(userInfo._id))
	}, [post.likes, userInfo._id])

	//handle the likes.
	const likeHandler = () => {
		try {
			//handle the like api.
			axios.put(`${process.env.REACT_APP_API}/like/${post._id}`, {
				userId: userInfo._id,
			})
		} catch (error) {}
		setLike(isLiked ? like - 1 : like + 1)
		//will toggle
		//if true get it to false, if false get it to true
		setisLiked(!isLiked)
	}

	//get all post on page start /single-user/:id.
	useEffect(() => {
		const fetchUsers = async () => {
			const resultPost = await axios.get(
				`${process.env.REACT_APP_API}/${post.userId}`
			)

			//update the state.
			setUsers(resultPost.data)
		}

		//call the function.
		fetchUsers()
	}, [post.userId])
	return (
		<div className='post'>
			<div className='postGroups'>
				<div className='postGroup'>
					{/* card header */}
					<div className='postCardHeader'>
						<div className='postCardHeaderLeft'>
							{userInfo ? (
								<Link to={`/account`}>
									<img
										src={users.imageProfile}
										alt='anodi'
										className='postUserImage'
									/>
								</Link>
							) : (
								<Link to={`/user/${users.username}`}>
									<img
										src={users.imageProfile}
										alt='xyz'
										className='postUserImage'
									/>
								</Link>
							)}

							<div className='postInfo'>
								<span className='postUserName'>{users.username}</span>
								<span className='postDate'>{format(post.createdAt)}</span>
							</div>
						</div>
						<div className='postCardHeaderRight'>
							<FontAwesomeIcon icon={faEllipsis} />
						</div>
					</div>

					{/* card body */}
					<div className='postCardBody'>
						<p className='postText'>{post?.description}</p>
						<img
							src={`./assets/uploads/${post?.image}`}
							className='postImg'
							alt=''
						/>
					</div>

					{/* card Footer */}
					<div className='postCardFooter'>
						<div className='postCardFooterLeft'>
							{isLiked ? (
								<img
									src='./assets/icons/heartred.png'
									alt='assets'
									className='postIconImg'
									onClick={likeHandler}
								/>
							) : (
								<img
									src='./assets/icons/heartwhite.png'
									alt='assets'
									className='postIconImg'
									onClick={likeHandler}
								/>
							)}

							<span className='postCounter'>{like} Likes</span>
						</div>
						<div className='postCardFooterRight'>
							<img
								src='./assets/icons/comment.png'
								alt='assets'
								className='postIconImg'
							/>
							<span className='postCounter'>{post.comments} comments</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
