import { faArrowDown, faBook, faPhotoFilm, faShop, faUserGroup, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sideBarGroups">
                <div className="sideBarGroup">
                    <Link to='/account' className='sidebarLink'>
                        <img src="/assets/images/user/model.jpg" alt="alts" className="currentUserImage" />
                        <span className="currentUserName">Gregory House</span>
                    </Link>
                </div>
                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faUsers} />
                    <Link to='/friends' className="subTitle">Friends</Link>
                </div>
                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faUserGroup} />
                    <Link to='/groups' className="subTitle">Groups</Link>
                </div>
                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faShop} />
                    <Link to='/marketplace' className="subTitle">Marketplace</Link>
                </div>
                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faVideo} />
                    <Link to='/watch' className="subTitle">Watch</Link>
                </div>
                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faBook} />
                    <Link to='/pages' className="subTitle">Pages</Link>
                </div>

                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faPhotoFilm} />
                    <Link to='/memories' className="subTitle">Memories</Link>
                </div>
                <hr className='hr' />
                <div className="sideBarGroup">
                    <FontAwesomeIcon icon={faArrowDown} />
                    <button>Click For More...</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar