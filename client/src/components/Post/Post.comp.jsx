import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './post.css'
import { Users } from '../../data'

const Post = ({ post }) => {
	return (
		<div className='post'>
			<div className='postGroups'>
				<div className='postGroup'>
					{/* card header */}
					<div className='postCardHeader'>
						<div className='postCardHeaderLeft'>
							<img
								src={
									Users.filter(user => user.id === post?.userId)[0].profileImage
								}
								alt='anodi'
								className='postUserImage'
							/>
							<div className='postInfo'>
								<span className='postUserName'>
									{Users.filter(user => user.id === post?.userId)[0].username}
								</span>
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
							<img
								src='./assets/icons/heartwhite.png'
								alt='assets'
								className='postIconImg'
							/>
							<span className='postCounter'>{post.likes} Likes</span>
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
