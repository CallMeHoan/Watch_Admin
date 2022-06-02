import React from 'react'
import { Sitemap } from '../../components'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import './styles.scss'

const data = [
	{
		fullname: 'Nguyen Thien Hoan',
		username: 'hoan123',
		date: '17/09/2001',
		gender: 'male',
		email: 'nguyenthienhoangeatam@gmail.com',
		phone: '0794676336',
		address: '59/8 duong 46 tp hcm',
	},
	{
		fullname: 'Nguyen Thien Hoan',
		username: 'hoan123',
		date: '17/09/2001',
		gender: 'male',
		email: 'nguyenthienhoangeatam@gmail.com',
		phone: '0794676336',
		address: '59/8 duong 46 tp hcm',
	},
]

const Users = () => {
	return (
		<div>
			<Sitemap title='Users' />
			<div className='user__container'>
				<div className='product__container'>
					<div className='btn-group'>
						<span className='title'>Users</span>
						<Button variant='contained' startIcon={<AddIcon />}>
							Add
						</Button>
					</div>
					<div className='table'>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Full name</TableCell>
										<TableCell align='left'>Username</TableCell>
										<TableCell align='left'>Date of birth</TableCell>
										<TableCell align='left'>Gender</TableCell>
										<TableCell align='left'>Email</TableCell>
										<TableCell align='left'>Phone number</TableCell>
										<TableCell align='left'>Address</TableCell>
										<TableCell align='left'>Action</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map((value, index) => (
										<TableRow
											key={index}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell align='left'>{value.fullname}</TableCell>
											<TableCell align='left'>{value.username}</TableCell>
											<TableCell align='left'>{value.date}</TableCell>
											<TableCell align='left'>{value.gender}</TableCell>
											<TableCell align='left'>{value.email}</TableCell>
											<TableCell align='left'>{value.phone}</TableCell>
											<TableCell align='left'>{value.address}</TableCell>
											<TableCell align='left'>
												<Stack direction='row' spacing={1}>
													<Button variant='contained' startIcon={<EditIcon />}>
														Edit
													</Button>
													<Button variant='contained' startIcon={<DeleteIcon />}>
														Delete
													</Button>
												</Stack>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Users
