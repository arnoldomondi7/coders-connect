import React from 'react'
import './onlinefriends.css'

const OnlineFriends = () => {
    return (
        <ul className="rightBarFriendsList">
            <li className="rightBarFriend">
                <div className="rightBarProfImgCont">
                    <img src="/assets/dp/muslimg.jpg" alt="dpsy" className="rightBarProfImg" />
                    <span className="rightBarOnline"></span>
                </div>
                <span className="rightBarProfImgName">Anotheer User</span>
            </li>
        </ul>
    )
}

export default OnlineFriends