import React from 'react'
import OnlineFriends from '../online/OnlineFriends'
import './rightbar.css'

const Rightbar = () => {
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="cake" className='birthdayImg' />
                    <span className="birthdayText"><b>Paula Whitehouse </b>and <b>4 others</b> have Birthdays today</span>
                </div>

                <img src="/assets/ad.png" alt="add" className="rightBarAd" />
                <h4 className="rightBarTitle"> Online Friends  </h4>
                <OnlineFriends />
            </div>
        </div>
    )
}

export default Rightbar