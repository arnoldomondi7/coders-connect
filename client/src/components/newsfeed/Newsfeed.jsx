import React from 'react'
import Share from '../share/Share'
import Story from '../story/Story'
import './newsfeed.css'

const Newsfeed = () => {
    return (
        <div className='newsfeed'>
            <Story />
            <Share />
        </div>
    )
}

export default Newsfeed