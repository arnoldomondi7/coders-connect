import React from 'react'
import Newsfeed from '../../components/newsfeed/Newsfeed.comp'
import Rightbar from '../../components/rightbar/Rightbar.comp'
import Sidebar from '../../components/sidebar/Sidebar.comp'
import Topnav from '../../components/Topnav/Topnav.component'
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
