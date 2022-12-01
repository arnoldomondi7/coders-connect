import React from 'react'
import OnlineFriends from '../online/OnlineFriends'
import './rightbar.css'

const Rightbar = ({ profile }) => {

    const HomerightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="cake" className='birthdayImg' />
                    <span className="birthdayText"><b>Paula Whitehouse </b>and <b>4 others</b> have Birthdays today</span>
                </div>

                <img src="/assets/ad.png" alt="add" className="rightBarAd" />
                <h4 className="rightBarTitle"> Online Friends  </h4>
                <OnlineFriends />
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightBarTitle'>User Information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Current City:</span>
                        <span className="rightBarInfoValue">Toronto</span>
                    </div>

                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From:</span>
                        <span className="rightBarInfoValue">Nairobi</span>
                    </div>

                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship:</span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className='rightBarTitle'>Users You Follow</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="/assets/dp/womansit.jpg" alt="sdw" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Justina Sparks</span>
                    </div>

                    <div className="rightBarFollowing">
                        <img src="/assets/dp/samayan.jpg" alt="sdw" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Justina Sparks</span>
                    </div>

                    <div className="rightBarFollowing">
                        <img src="/assets/dp/pexel.jpg" alt="sdw" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Justina Sparks</span>
                    </div>

                    <div className="rightBarFollowing">
                        <img src="/assets/dp/pexelmon.jpg" alt="sdw" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Justina Sparks</span>
                    </div>

                    <div className="rightBarFollowing">
                        <img src="/assets/dp/girlimg.jpg" alt="sdw" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Justina Sparks</span>
                    </div>

                    <div className="rightBarFollowing">
                        <img src="/assets/dp/female.jpg" alt="sdw" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Justina Sparks</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <ProfileRightBar />
            </div>
        </div>
    )
}

export default Rightbar