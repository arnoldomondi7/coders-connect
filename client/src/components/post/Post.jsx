import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './post.css'
import { Users } from '../../data'

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setisLiked] = useState(false)

    //handle the clicks.
    const handleLikes = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setisLiked(!isLiked) //if true it will be false and viceversa
    }
    return (
        <div className='post'>
            <div className="postGroups">
                <div className="postGroup">
                    <div className="postCardHeader">
                        <div className="postCardHeaderLeft">
                            <img src={Users.filter((user) => user.id === post.userId)[0].profileImg} alt="alts" className="postUserImage" />
                            <div className="postInfo">
                                <span className="postUsername">{Users.filter((user) => user.id === post.userId)[0].username}</span>
                                <span className="postDate">{post.date}</span>
                            </div>
                        </div>
                        <div className="postCardHeaderRight">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </div>
                    <div className="postCardBody">
                        <p className="postText">{post.description}</p>
                        <img src={post.image} className='postImg' alt="" />
                    </div>
                    <div className="postCardFooter">
                        <div className="postCardFooterLeft">
                            {isLiked ? (
                                <>
                                    <img src="/assets/images/user/thumb-down.png" alt="" className="postIconImg" onClick={handleLikes} />
                                    <img src="/assets/images/user/like.png" alt="" className="postIconImg" onClick={handleLikes} />
                                </>
                            ) : (
                                <>
                                    <img src="/assets/images/user/thumb-up.png" alt="" className="postIconImg" onClick={handleLikes} />

                                    <img src="/assets/images/user/heart.png" alt="" className="postIconImg" onClick={handleLikes} />
                                </>
                            )}


                            <span className="postCounter">{like} people liked </span>
                        </div>
                        <div className="postCardFooterRight">
                            <span className="postComments">{post.comment} comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post