import React from 'react'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Account from './pages/account/Account'

const MainRoute = () => {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account' element={<Account />} />
            </Routes>

        </div>
    )
}

export default MainRoute