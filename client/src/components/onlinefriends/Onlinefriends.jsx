import React from 'react'
import './onlinefriends.css'

const Onlinefriends = ({ user }) => {
    return (
        <div className="onlineGroup">
            <div className="onlineGroupLeft">
                <img src={user.profileImg} alt={user.username} className="onlineUserImg" />
                <div className="onlineBadge"></div>
            </div>
            <div className="onlineGroupRight">
                <span className="onlineUsername">{user.username}</span>
            </div>
        </div>
    )
}

export default Onlinefriends