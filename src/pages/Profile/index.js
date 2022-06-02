import React from 'react'
import { Sitemap } from '../../components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import StarIcon from '@mui/icons-material/Star'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import './styles.scss'
import 'react-tabs/style/react-tabs.css'
import Avatar from '../../assets/avatar.jpg'

const Profile = () => {
	return (
		<div>
			<Sitemap title='Profile' />
			<div className='profile__container'>
				<div className='user'>
					<div className='user__info'>
						<img src={Avatar} className='avatar' alt='Avatar' />
						<span className='name'>Thien Hoan</span>
						<span className='role'>Admin</span>
						<div className='rating'>
							<StarIcon className='star' />
							<StarIcon className='star' />
							<StarIcon className='star' />
							<StarIcon className='star' />
							<StarIcon className='star' />
						</div>
						<div className='social'>
							<FacebookOutlinedIcon className='icon' />
							<TwitterIcon className='icon' />
							<InstagramIcon className='icon' />
							<YouTubeIcon className='icon' />
						</div>
						<div className='line'></div>
						<div className='follow'>
							<div className='contain'>
								<span className='follers'>689K</span>
								<span className='follers'>Followers</span>
							</div>
							<div className='contain'>
								<span className='follers'>3,765</span>
								<span className='follers'>Following</span>
							</div>
						</div>
					</div>
					<div className='user__contact'>
						<span className='title'>Contact Information</span>
						<div className='line'></div>
						<div className='overview'>
							<div className='group'>
								<PhoneAndroidIcon className='icon' />
								<div className='info'>
									<span className='info-top'>Mobile</span>
									<span className='info-bot'>(+84) 79 467 6336</span>
								</div>
							</div>
							<div className='group'>
								<MailIcon className='icon' />
								<div className='info'>
									<span className='info-top'>Slack</span>
									<span className='info-bot'>@hoan123.com</span>
								</div>
							</div>
							<div className='group'>
								<LocationOnIcon className='icon' />
								<div className='info'>
									<span className='info-top'>Current Address</span>
									<span className='info-bot'>Ho Chi Minh City</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='detail'>
					<Tabs>
						<TabList>
							<Tab>OVERVIEW</Tab>
							<Tab>EDIT PROFILE</Tab>
						</TabList>
						<TabPanel>
							<div className='tab-container'>
								<span className='category'>PERSONAL INFORMATION</span>
								<div className='container'>
									<div className='left'>
										<div className='cate-info'>
											<span className='cate-title'>Full Name:</span>
											<span className='cate-text'>Nguyen Thien Hoan</span>
										</div>
										<div className='cate-info'>
											<span className='cate-title'>Location:</span>
											<span className='cate-text'>Ho Chi Minh City</span>
										</div>
										<div className='cate-info'>
											<span className='cate-title'>Language:</span>
											<span className='cate-text'>Vietnamese</span>
										</div>
									</div>
									<div className='right'>
										<div className='cate-info'>
											<span className='cate-title'>Website:</span>
											<span className='cate-text'>example.com</span>
										</div>
										<div className='cate-info'>
											<span className='cate-title'>Email:</span>
											<span className='cate-text'>nguyenthienhoangeatam@gmail.com</span>
										</div>
										<div className='cate-info'>
											<span className='cate-title'>Phone:</span>
											<span className='cate-text'>(+84) 79 467 6336</span>
										</div>
									</div>
								</div>
								<span className='category'>ABOUT</span>
								<span className='cate-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.
								</span>
							</div>
						</TabPanel>
						<TabPanel>
							<div className='tab-container'></div>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</div>
	)
}

export default Profile
