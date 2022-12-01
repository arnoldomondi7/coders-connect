import React from 'react'
import Posts from '../post/Posts'
import Sharepost from '../sharepost/Sharepost'
import './feedbar.css'

const Feedbar = () => {
    return (
        <div className='feedBar'>
            <div className="feedBarWrapper">
                <Sharepost />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    )
}

export default Feedbar