import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPerson, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './top.css'

const Top = () => {
  return (
    <div className='top'>
      <div className="topLeft">
        <h2 className="logo">Coders-Connect</h2>
        <div className="topSearch">
          <input placeholder='Search...' type='text' />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="topMiddle">
        <div className="topLinks">
          <ul>
            <li><NavLink to='/' activeclassname='active' >Home</NavLink></li>
            <li><NavLink to='/friends' activeclassname='active'>Friends</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="topRight">
        <div className="notification">
          <FontAwesomeIcon icon={faPerson} />
          <span className="badge">1</span>
        </div>

        <div className="notification">
          <FontAwesomeIcon icon={faMessage} />
          <span className="badge">1</span>
        </div>

        <div className="notification">
          <FontAwesomeIcon icon={faBell} />
          <span className="badge">1</span>
        </div>
        <div className="user">
          <img src="/assets/images/user/camille.jpg" alt="alts" className="userImage" />
          <span className="userLogout">Logout</span>
        </div>
      </div>

    </div>
  )
}

export default Top