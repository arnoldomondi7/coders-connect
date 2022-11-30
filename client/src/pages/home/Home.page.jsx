import React from 'react'
import Feedbar from '../../components/feed/Feedbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import './home.css'

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Leftbar />
                <Feedbar />
                <Rightbar />
            </div>
        </>
    )
}

export default Home