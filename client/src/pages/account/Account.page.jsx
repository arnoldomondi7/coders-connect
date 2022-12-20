import React from 'react'
import Cover from '../../components/Cover/Cover.comp'
import Footer from '../../components/Footer/Footer.comp'
import NewAccountPost from '../../components/NewAccountPost/NewAccountPost.comp'
import Rightbar from '../../components/Rightbar/Rightbar.comp'
import Topnav from '../../components/Topnav/Topnav.comp'
import './account.css'

const Account = () => {
	return (
		<>
			<Topnav />
			<div className='mainContainer d-flex'>
				<Cover />
				<div className='nADiv'>
					<NewAccountPost />
					<Rightbar />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Account
