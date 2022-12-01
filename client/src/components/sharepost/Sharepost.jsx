import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import './sharepost.css'

const Sharepost = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/dp/girlimg.jpg" alt="dp" className="shareProfileImg" />
                    <input type="text" placeholder='Whats on your mind' className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo/Video</span>
                        </div>

                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>

                        <div className="shareOption">
                            <AddLocationIcon htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText'>Emotions</span>
                        </div>
                    </div>
                    <button className='shareBtn'>share</button>
                </div>
            </div>
        </div>
    )
}

export default Sharepost