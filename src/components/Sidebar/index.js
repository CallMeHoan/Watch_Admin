import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import GridViewIcon from '@mui/icons-material/GridView'
import PersonIcon from '@mui/icons-material/Person'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import GroupIcon from '@mui/icons-material/Group'
import PaidIcon from '@mui/icons-material/Paid'

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='logo_container'>
				<img src={Logo} alt='Logo' className='logo' />
			</div>
			<div className='menu'>
				<div className='block'>
					<span className='title'>NAVIGATION</span>
				</div>
				<Link className='link' to='/'>
					<div className='menu__container'>
						<GridViewIcon className='icons' />
						<span className='menu__title'>Dashboard</span>
					</div>
				</Link>
				<Link className='link' to='/profile'>
					<div className='menu__container'>
						<PersonIcon className='icons' />
						<span className='menu__title'>Profile</span>
					</div>
				</Link>
				<Link className='link' to='/products'>
					<div className='menu__container'>
						<Inventory2Icon className='icons' />
						<span className='menu__title'>Products</span>
					</div>
				</Link>
				<Link className='link' to='/users'>
					<div className='menu__container'>
						<GroupIcon className='icons' />
						<span className='menu__title'>Users</span>
					</div>
				</Link>
				<Link className='link' to='/transactions'>
					<div className='menu__container'>
						<PaidIcon className='icons' />
						<span className='menu__title'>Transactions</span>
					</div>
				</Link>
			</div>
		</div>
	)
}
