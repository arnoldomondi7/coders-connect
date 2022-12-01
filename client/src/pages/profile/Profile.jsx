import React from 'react'
import Feedbar from '../../components/feed/Feedbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/posts/fboots.jpg" alt="" className="profileCoverImg" />

                            <img src="/assets/dp/model.jpg" alt="" className="profileUserImg" />
                        </div>

                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Arnold Omondi</h4>
                            <span className='profileDesc'>Javascript Developer</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feedbar />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile