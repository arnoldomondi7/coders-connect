import React from 'react'
import Newsfeed from '../../components/newsfeed/Newsfeed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Top from '../../components/topnav/Top'

import './home.css'

const Home = () => {
    return (
        <>
            <Top />
            <div className="mainContainer">
                <Sidebar />
                <Newsfeed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home