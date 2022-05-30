import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-black.png'
import './styles.scss'

const SignUp = () => {
	return (
		<div className='SignUp'>
			<div className='border'>
				<div className='signin__form'>
					<div className='logo_container'>
						<img src={Logo} alt='Logo' className='logo' />
					</div>
					<span className='title'>SIGN UP</span>
					<div className='input-box'>
						<input className='input' placeholder='Enter your Email' type='email'></input>
					</div>
					<div className='input-box'>
						<input className='input' placeholder='Enter your username' type='text'></input>
					</div>
					<div className='input-box'>
						<input className='input' placeholder='Enter your username' type='password'></input>
					</div>
					<div className='button'>Join Now</div>
					<div className='text-group'>
						<span classname='text'>Already have account?</span>
						<Link className='link' to='/'>
							<span className='text-btn'>Sign In</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
