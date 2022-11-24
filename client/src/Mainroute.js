import React from 'react'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'

const MainRoute = () => {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>

        </div>
    )
}

export default MainRoute