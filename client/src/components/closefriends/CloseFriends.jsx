import React from 'react'
import './closefriends.css'

const CloseFriends = () => {
    return (
        <ul className="leftbarFriendList">
            <li className="leftbarFriend">
                <img className='leftbarFriendImg' src='/assets/dp/blackman.jpg' alt='blackman' />
                <span className="leftbarFriendName">Jane Doe</span>
            </li>
        </ul>
    )
}

export default CloseFriends