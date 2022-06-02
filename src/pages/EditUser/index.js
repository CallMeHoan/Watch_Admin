import React from 'react'
import { Sitemap } from '../../components'
import SaveIcon from '@mui/icons-material/Save'
import Button from '@mui/material/Button'
import './styles.scss'

const EditUser = () => {
	return (
		<div>
			<Sitemap title='Edit User'></Sitemap>
			<div className='edit__container'>
				<div className='btn-group'>
					<span className='title'>Edit User</span>
					<Button variant='contained' startIcon={<SaveIcon />}>
						Save changes
					</Button>
				</div>
				<div className='edit-form'>
					<div className='form'>
						<div className='field'>Full name</div>
						<input type='text' className='input' placeholder='Hoan'></input>
					</div>
					<div className='form'>
						<div className='field'>Username</div>
						<input type='text' className='input' placeholder='Hoan' disabled></input>
					</div>
					<div className='form'>
						<div className='field'>Date of birth</div>
						<input type='date' className='input' placeholder='Hoan'></input>
					</div>
					<div className='form'>
						<div className='field'>Gender</div>
						<select id='gender' className='input'>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
						</select>
					</div>
					<div className='form'>
						<div className='field'>Email</div>
						<input type='text' className='input' placeholder='Hoan'></input>
					</div>
					<div className='form'>
						<div className='field'>Phone number</div>
						<input type='text' className='input' placeholder='Hoan'></input>
					</div>
					<div className='form'>
						<div className='field'>Address</div>
						<input type='text' className='input' placeholder='Hoan'></input>
					</div>
				</div>
			</div>
		</div>
	)
}
export default EditUser
