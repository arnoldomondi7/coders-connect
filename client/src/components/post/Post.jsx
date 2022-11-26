import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className="postGroups">
                <div className="postGroup">
                    <div className="postCardHeader">
                        <div className="postCardHeaderLeft">
                            <img src="/assets/images/user/model.jpg" alt="alts" className="postUserImage" />
                            <div className="postInfo">
                                <span className="postUsername">Gregory House</span>
                                <span className="postDate">3 minutes ago</span>
                            </div>
                        </div>
                        <div className="postCardHeaderRight">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </div>
                    <div className="postCardBody">
                        <p className="postText">My City </p>
                        <img src="/assets/images/user/jazz.jpg" className='postImg' alt="" />
                    </div>
                    <div className="postCardFooter">
                        <div className="postCardFooterLeft">
                            <img src="/assets/images/user/thumb-up.png" alt="" className="postIconImg" />
                            <img src="/assets/images/user/heart.png" alt="" className="postIconImg" />
                            <span className="postCounter">4 people liked </span>
                        </div>
                        <div className="postCardFooterRight">
                            <span className="postComments">0 comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post