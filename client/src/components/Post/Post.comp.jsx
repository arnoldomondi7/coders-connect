import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './post.css'
import axios from 'axios'

const Post = ({ post }) => {
	//get the display pictures.
	//initially an empty object.
	const [users, setUsers] = useState({})
	const [like, setLike] = useState(post.likes)
	const [isLiked, setisLiked] = useState(false)

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
							<img
								src={users.imageProfile}
								alt='anodi'
								className='postUserImage'
							/>
							<div className='postInfo'>
								<span className='postUserName'>{users.username}</span>
								<span className='postDate'>{post.date}</span>
							</div>
						</div>
						<div className='postCardHeaderRight'>
							<FontAwesomeIcon icon={faEllipsis} />
						</div>
					</div>

					{/* card body */}
					<div className='postCardBody'>
						<p className='postText'>{post?.description}</p>
						<img src={post?.postImage} className='postImg' alt='' />
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
