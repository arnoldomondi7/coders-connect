import React from 'react'
import { Users } from '../../data'

const Newstory = ({ s }) => {
    return (
        <div className="storyGroup">
            <div className="storyDiv">
                <div className="storyUserAddImgDiv">
                    <img src={Users.filter((user) => user.id === s.userId)[0].profileImg} alt='user img' className="storyUserAddImg" />
                </div>

                <div className="storyUser">
                    <img src={s.image} alt="storybody" className="storyUserAddImg" />
                </div>

                <div className="storyUserTitle">
                    <h5>{Users.filter((user) => user.id === s.userId)[0].username}</h5>
                </div>
            </div>
        </div>
    )
}

export default Newstory