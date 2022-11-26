import React from 'react'
import { Posts, } from '../../data'
import Post from '../post/Post'
import Share from '../share/Share'
import Story from '../story/Story'

import './newsfeed.css'

const Newsfeed = () => {
    return (
        <div className='newsfeed'>
            <Story />
            <Share />
            {Posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}

        </div>
    )
}

export default Newsfeed