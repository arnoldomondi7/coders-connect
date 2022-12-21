import React from 'react'
import Topnav from '../../components/Topnav/Topnav.comp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer/Footer.comp'
import { Users } from '../../data'
import './newfriends.css'
import AddNewFriends from '../../components/AddNewFriends/AddNewFriends.comp'

const NewFriends = () => {
	return (
		<>
			<Topnav />
			<div className='mainDiv'>
				<div className='friends'>
					<div className='friendsTop'>
						<h3 className='friendsTitle'>People You May Know</h3>
						<div className='topSearch'>
							<input type='text' placeholder='Find Friends' />
							<FontAwesomeIcon icon={faSearch} />
						</div>
					</div>
					<div className='friendsMiddle'>
						<div className='friendsGroups'>
							{Users.map((user, i) => (
								<AddNewFriends user={user} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default NewFriends
