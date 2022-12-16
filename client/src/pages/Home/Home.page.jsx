import React from 'react'
import Topnav from '../../components/Topnav/Topnav.comp'
import Sidebar from '../../components/Sidebar/Sidebar.comp'
import Newsfeed from '../../components/Newsfeed/Newsfeed.comp'
import Rightbar from '../../components/Rightbar/Rightbar.comp'
import './home.css'

const Home = () => {
	return (
		<>
			<Topnav />
			<div className='mainContainer'>
				<Sidebar />
				<Newsfeed />
				<Rightbar />
			</div>
		</>
	)
}

export default Home
