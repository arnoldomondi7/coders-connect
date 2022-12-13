import React from 'react'
import Home from './pages/Home/Home.page'
import { Routes, Route } from 'react-router-dom'

const Mainroute = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default Mainroute
