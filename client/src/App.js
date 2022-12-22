import React from 'react'
import MainRoute from './MainRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
	return (
		<div>
			<ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
			<MainRoute />
		</div>
	)
}

export default App
