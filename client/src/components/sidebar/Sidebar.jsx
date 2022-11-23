import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import GroupsIcon from '@mui/icons-material/Groups'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import HelpIcon from '@mui/icons-material/Help'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sideBarListItem">
                        <RssFeedIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Feeds</span>
                    </li>

                    <li className="sideBarListItem">
                        <ChatIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Chats</span>
                    </li>

                    <li className="sideBarListItem">
                        <OndemandVideoIcon className='sideBarIcon' />
                        <span className="sideBarItemText">videos</span>
                    </li>

                    <li className="sideBarListItem">
                        <GroupsIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Groups</span>
                    </li>

                    <li className="sideBarListItem">
                        <BookmarkAddIcon className='sideBarIcon' />
                        <span className="sideBarItemText">BookMarks</span>
                    </li>

                    <li className="sideBarListItem">
                        <HelpIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Ask Question</span>
                    </li>

                    <li className="sideBarListItem">
                        <WorkIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Jobs</span>
                    </li>

                    <li className="sideBarListItem">
                        <EventIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Events</span>
                    </li>

                    <li className="sideBarListItem">
                        <SchoolIcon className='sideBarIcon' />
                        <span className="sideBarItemText">Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More...</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img src="/assets/modelman1.jpg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/computer1.jpg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Hewlet Pickard</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/hplaptop.jpg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Sillicon Valley</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/imac.jpeg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Steve Jobbs</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/imac20.jpg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Steve Woz</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/laptop.png" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/lenovo.jpeg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Middle East</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/macbook.jpg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Mille Nials</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img src="/assets/macbook16.jpg" alt="model" className="sidebarImg" />
                        <span className="sidebarFriendName">Early Generation</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar