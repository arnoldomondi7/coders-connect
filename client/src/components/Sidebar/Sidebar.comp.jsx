import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowDown,
	faBook,
	faPhotoFilm,
	faShop,
	faUserGroup,
	faUsers,
	faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sideBarGroups'>
				{/* one */}
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
				{/* two */}
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faUsers} />
					<Link to='/friends' className='sideTitle'>
						Friends
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faUserGroup} />
					<Link to='/groups' className='sideTitle'>
						Groups
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faShop} />
					<Link to='/marketplace' className='sideTitle'>
						Marketplace
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faVideo} />
					<Link to='/watch' className='sideTitle'>
						Watch
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faBook} />
					<Link to='/pages' className='sideTitle'>
						Pages
					</Link>
				</div>
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faPhotoFilm} />
					<Link to='/memories' className='sideTitle'>
						Memories
					</Link>
				</div>
				<hr className='hr' />
				<div className='sideBarGroup'>
					<FontAwesomeIcon icon={faArrowDown} />
					<button>Click For More</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
