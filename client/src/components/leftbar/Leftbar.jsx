import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import GroupsIcon from '@mui/icons-material/Groups'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpIcon from '@mui/icons-material/Help'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School'
import './leftbar.css'
import CloseFriends from '../closefriends/CloseFriends'

const Leftbar = () => {
    return (
        <div className='leftbar'>
            <div className="leftBarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeedIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Feed</span>
                    </li>

                    <li className="leftbarListItem">
                        <ChatIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Chats</span>
                    </li>

                    <li className="leftbarListItem">
                        <OndemandVideoIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Videos</span>
                    </li>

                    <li className="leftbarListItem">
                        <GroupsIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Groups</span>
                    </li>

                    <li className="leftbarListItem">
                        <BookmarkIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Bookamarks</span>
                    </li>

                    <li className="leftbarListItem">
                        <HelpIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Help</span>
                    </li>

                    <li className="leftbarListItem">
                        <WorkIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Jobs</span>
                    </li>

                    <li className="leftbarListItem">
                        <EventIcon className='leftbarIcon' />
                        <span className="leftbarListItemText">Events</span>
                    </li>

                    <li className="leftbarListItem">
                        <SchoolIcon className='leftbarIcon' />
                        <span className="leftbarListItemText"> Courses</span>
                    </li>
                </ul>

                <button className="leftBarBtn">Show More</button>
                <hr className='leftbarHr' />

                <CloseFriends />
            </div>
        </div>
    )
}

export default Leftbar