import React from 'react'
import { Users } from '../../data'
import Onlinefriends from '../onlinefriends/Onlinefriends'
import './rightbar.css'

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <h4 className="online">Online Friends</h4>
            <div className="onlineGroups">

                {Users.map((user) => (
                    <Onlinefriends key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default Rightbar