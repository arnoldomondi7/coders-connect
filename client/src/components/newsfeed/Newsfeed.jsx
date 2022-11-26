import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import Story from '../story/Story'
import './newsfeed.css'

const Newsfeed = () => {
    return (
        <div className='newsfeed'>
            <Story />
            <Share />
            <Post />
        </div>
    )
}

export default Newsfeed