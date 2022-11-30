import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import './topbar.css'

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Coders-Connect</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className='searchIcon' />
                    <input type="text" className="searchInput" placeholder='Search for anything' />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <NotificationsActiveIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                </div>

                <img src="/assets/dp/samayan.jpg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}

export default Topbar