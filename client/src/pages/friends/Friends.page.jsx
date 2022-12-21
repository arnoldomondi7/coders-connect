import React from 'react'
import Topnav from '../../components/Topnav/Topnav.comp'
import Footer from '../../components/Footer/Footer.comp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './friends.css'
import { Users } from '../../data'
import MyFriends from '../../components/MyFriends/MyFriends.comp'

const Friends = () => {
	return (
		<>
			<Topnav />
			<div className='mainDiv'>
				<div className='friends'>
					<div className='friendsTop'>
						<h3 className='friendsTitle'>All Friends</h3>
						<div className='topSearch'>
							<input type='text' placeholder='Find Friends' />
							<FontAwesomeIcon icon={faSearch} />
						</div>
					</div>
					<div className='friendsMiddle'>
						<div className='friendsGroups'>
							{Users.map((user, i) => (
								<MyFriends user={user} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Friends
