import React from 'react'
import Home from './pages/home/Home.page'
import { Routes, Route } from 'react-router-dom'
import Account from './pages/account/Account.page'
import Login from './pages/login/Login.page'
import Register from './pages/register/Register.page'
import Friends from './pages/friends/Friends.page'
import UserProfile from './pages/UserProfile/UserProfile.page'
import NewFriends from './pages/newFriends/NewFriends.page'

const MainRoute = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/account' element={<Account />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/friends' element={<Friends />} />
			<Route path='/user/:id' element={<UserProfile />} />
			<Route path='/add-friends' element={<NewFriends />} />
		</Routes>
	)
}

export default MainRoute
