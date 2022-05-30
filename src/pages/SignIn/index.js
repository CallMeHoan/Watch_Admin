import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-black.png'
import './styles.scss'

const SignIn = () => {
	return (
		<div className='SignIn'>
			<div className='border'>
				<div className='signin__form'>
					<div className='logo_container'>
						<img src={Logo} alt='Logo' className='logo' />
					</div>
					<span className='title'>SIGN IN</span>
					<div className='input-box'>
						<input className='input' placeholder='Enter your username' type='text'></input>
					</div>
					<div className='input-box'>
						<input className='input' placeholder='Enter your username' type='password'></input>
					</div>
					<div className='button'>Log in</div>
					<div className='text-group'>
						<span classname='text'>Don't have an account?</span>
						<Link className='link' to='/sign-up'>
							<span className='text-btn'>Sign Up</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn
