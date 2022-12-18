import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './post.css'

const Post = () => {
	return (
		<div className='post'>
			<div className='postGroups'>
				<div className='postGroup'>
					{/* card header */}
					<div className='postCardHeader'>
						<div className='postCardHeaderLeft'>
							<img
								src='./assets/user/anodi.jpg'
								alt='anodi'
								className='postUserImage'
							/>
							<div className='postInfo'>
								<span className='postUserName'>Arnold Omondi</span>
								<span className='postDate'>2 minutes ago</span>
							</div>
						</div>
						<div className='postCardHeaderRight'>
							<FontAwesomeIcon icon={faEllipsis} />
						</div>
					</div>

					{/* card body */}
					<div className='postCardBody'>
						<p className='postText'>My City My Town</p>
						<img
							src='./assets/posts/model.jpg'
							className='postImg'
							alt='asse'
						/>
					</div>
					<div className='postCardFooter'>
						<div className='postCardFooterLeft'>
							<img
								src='./assets/icons/heartwhite.png'
								alt='assets'
								className='postIconImg'
							/>
							<span className='postCounter'>3 likes</span>
						</div>
						<div className='postCardFooterRight'>
							<img
								src='./assets/icons/comment.png'
								alt='assets'
								className='postIconImg'
							/>
							<span className='postCounter'>32 comments</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
