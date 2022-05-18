import React from 'react'
import './styles.scss'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import EmailIcon from '@mui/icons-material/Email'
import VietNam from '../../assets/vietnam.webp'
import Avatar from '../../assets/avatar.jpg'

export const Header = () => {
	return (
		<div className='header'>
			<div className='search__box'>
				<input type='text' className='search__input' placeholder='Type here to search ...' />
				<SearchIcon className='icon__btn' />
			</div>
			<div className='user__box'>
				<div className='icon__container'>
					<img src={VietNam} alt='VietNam' className='flag' />
					<NotificationsActiveIcon />
					<EmailIcon />
				</div>
				<div className='user__info'>
					<img src={Avatar} className='user__avatar' alt='Avatar' />
					<span className='user__name'>Cardi B</span>
				</div>
			</div>
		</div>
	)
}
