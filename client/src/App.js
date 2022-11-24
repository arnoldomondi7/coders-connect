import React from 'react'
import MainRoute from './Mainroute'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <div >
            <BrowserRouter>
                <MainRoute />
            </BrowserRouter>

        </div>
    )
}

export default App
