import React from 'react'
import Home from './pages/home/Home.page'
import { Routes, Route } from 'react-router-dom'

const MainRoute = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

export default MainRoute
