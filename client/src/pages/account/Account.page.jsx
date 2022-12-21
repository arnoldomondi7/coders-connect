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
			{/* step1 */}
			<Topnav />
			<div className='mainContainer d-flex'>
				{/* step2 */}
				<Cover />
				{/* step3 */}
				<div className='nADiv'>
					{/* step4 */}
					<NewAccountPost />
					{/* step 5 */}
					<Rightbar />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Account
