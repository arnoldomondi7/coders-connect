import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import './post.css'

const Posts = () => {

    // const [like setLike] = useState()
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/dp/pexelmon.jpg" alt="ldp" className='postProfileImg' />
                        <span className='postUserName'>User X</span>
                        <span className='postDate'>2 hours ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postBottom">
                        First post by user ;)
                    </span>
                    <img src="/assets/posts/motobike.jpg" alt="pb" className='postImg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/thumb-up.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">43 Likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentsText">45 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts