import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Header, Sidebar } from './components'
function App() {
	return (
		<div className='App'>
			<Router>
				<Suspense fallback={<h1>Loading...</h1>}>
					<div className='container'>
						<Sidebar />
						<div className='content'>
							<Header />
							<h1>Hello</h1>
						</div>
					</div>
					<ToastContainer
						position='bottom-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</Suspense>
			</Router>
		</div>
	)
}

export default App
