import React from 'react'
import {
	faBook,
	faPhotoFilm,
	faShop,
	faUserGroup,
	faUsers,
	faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
	return (
		<div className='sideBar'>
			<div className='sideBarGroups'>
				<div className='sideBarGroup'>
					<Link to='/account' className='sideBarLink'>
						<img
							src='./assets/user/anodi.jpg'
							alt='anodi'
							className='currentUserImg'
						/>
						<span className='currentUserName'>Arnold Omondi</span>
					</Link>
				</div>

				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faUsers} />
					<Link className='subTitle' to='/friends'>
						Friends
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faUserGroup} />
					<Link className='subTitle' to='/groups'>
						Groups
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faShop} />
					<Link className='subTitle' to='/marketplace'>
						Marketplace
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faVideo} />
					<Link className='subTitle' to='/watch'>
						Watch
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faBook} />
					<Link className='subTitle' to='/pages'>
						Pages
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faPhotoFilm} />
					<Link className='subTitle' to='/memories'>
						Memories
					</Link>
				</div>

				<div className='sideBarGroup'>
					<button>Click For More...</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
