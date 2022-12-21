import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Users } from '../../data'
import './newsingacc.css'

const NewSingAccPost = ({ post }) => {
	const [like, setLike] = useState(post.likes)
	const [isLiked, setisLiked] = useState(false)

	//handle the likes.
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1)
		//will toggle
		//if true get it to false, if false get it to true
		setisLiked(!isLiked)
	}
	return (
		<div className='nsap'>
			<div className='nsapGroups'>
				<div className='nsapGroup'>
					{/* card header */}
					<div className='nsapCardHeader'>
						<div className='nsapCardHeaderLeft'>
							<img
								src={`../${
									Users.filter(user => user.id === post?.userId)[0].profileImage
								}`}
								alt='anodi'
								className='nsapUserImage'
							/>
							<div className='nsapInfo'>
								<span className='nsapUserName'>
									{Users.filter(user => user.id === post?.userId)[0].username}
								</span>
								<span className='nsapDate'>{post.date}</span>
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
