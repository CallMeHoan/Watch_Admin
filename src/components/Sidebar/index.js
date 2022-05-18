import React from 'react'
import './styles.scss'
import Logo from '../../assets/logo.png'
import GridViewIcon from '@mui/icons-material/GridView'
import PersonIcon from '@mui/icons-material/Person'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import GroupIcon from '@mui/icons-material/Group'

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
				<div className='menu__container'>
					<GridViewIcon />
					<span className='menu__title'>Dashboard</span>
				</div>
				<div className='menu__container'>
					<PersonIcon />
					<span className='menu__title'>Profile</span>
				</div>
				<div className='menu__container'>
					<Inventory2Icon />
					<span className='menu__title'>Products</span>
				</div>
				<div className='menu__container'>
					<GroupIcon />
					<span className='menu__title'>Users</span>
				</div>
			</div>
		</div>
	)
}
