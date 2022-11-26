import React from 'react'
import Footer from '../../components/footer/Footer'
import Top from '../../components/topnav/Top'
import './account.css'

const Account = () => {
    return (
        <>
            <Top />
            <div className="mainContainer">
                <div className="accountDiv">
                    <div className="accountCover">
                        <img alt='' src='/assets/images/user/bridge.jpg' />
                    </div>

                    <div className="accountInfo">
                        <div className="accountInfoLeft">
                            <img src="/assets/images/user/womansit.jpg" alt="" />
                        </div>
                        <div className="accountInfoRight">
                            <h3 className="userName">Gregory House</h3>
                            <span className="userFriends">friends: 6</span>
                            <div className="friends">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <span className="dots">...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Account