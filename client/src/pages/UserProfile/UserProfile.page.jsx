import React from 'react'
import Footer from '../../components/Footer/Footer.comp'
import SingeUserTop from '../../components/UserTop/SingeUserTop.comp'
import SingleUserCover from '../../components/SingleUserCover/SingleUserCover.comp'
import SingleRightBar from '../../components/SingleRightBar/SingleRightBar.comp'
import './userprofile.css'
import NewAccountPost from '../../components/NewAccountPost/NewAccountPost.comp'

const UserProfile = () => {
	return (
		<>
			{/* step1 */}
			<SingeUserTop />
			<div className='mainContainer d-flex'>
				{/* step3 */}
				<SingleUserCover />
				<div className='nADiv'>
					<NewAccountPost />
					<SingleRightBar />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default UserProfile
