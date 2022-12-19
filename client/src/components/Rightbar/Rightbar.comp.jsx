import React from 'react'
import Onlinefriends from '../onlineFriends/Onlinefriends.comp'
import './rightbar.css'
import { Users } from '../../data'

const Rightbar = () => {
	return (
		<div className='rightbar'>
			<h4 className='online'>Online Friends</h4>
			<div className='onlineGroups'>
				{Users.map((user, i) => (
					<Onlinefriends user={user} key={i} />
				))}
			</div>
		</div>
	)
}

export default Rightbar
