import React from 'react'
import Home from './pages/home/Home.page'
import { Routes, Route } from 'react-router-dom'
import Account from './pages/account/Account.page'

const MainRoute = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/account' element={<Account />} />
		</Routes>
	)
}

export default MainRoute
