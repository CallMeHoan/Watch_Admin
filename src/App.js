import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Header, Sidebar } from './components'
import { Edit } from '@mui/icons-material'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Products = lazy(() => import('./pages/Products'))
const Users = lazy(() => import('./pages/Users'))
const EditProduct = lazy(() => import('./pages/EditProduct'))
const AddProduct = lazy(() => import('./pages/AddProduct'))
const EditUser = lazy(() => import('./pages/EditUser'))

const user = [{ name: null }]

function App() {
	if (user.name == null) {
		return (
			<div className='App'>
				<Router>
					<Suspense fallback={<h1>Loading...</h1>}>
						<div className='container'>
							<Sidebar />
							<div className='content'>
								<Header />
								<Switch>
									<Route path='/' component={Dashboard} exact />
									<Route path='/profile' component={Profile} exact />
									<Route path='/products' component={Products} exact />
									<Route path='/users' component={Users} exact />
									<Route path='/edit-product' component={EditProduct} exact />
									<Route path='/add-product' component={AddProduct} exact />
									<Route path='/edit-user' component={EditUser} exact />
								</Switch>
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
	} else {
		return (
			<div className='App'>
				<Router>
					<Suspense fallback={<h1>Loading...</h1>}>
						<Switch>
							<Route path='/' component={SignIn} exact />
							<Route path='/sign-up' component={SignUp} exact />
						</Switch>
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
}

export default App
