import React from 'react'
import './common.css'
import PermMediaIcon from '@mui/icons-material/PermMedia'

const Common = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/womanmodel3.jpg" alt="macbook" className="shareImage" />
                    <input type="text" placeholder='Whats On Your Mind?' className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Common