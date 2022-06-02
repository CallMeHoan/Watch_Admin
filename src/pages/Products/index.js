import React from 'react'
import { Sitemap } from '../../components'
import { Link } from 'react-router-dom'
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
		image: 'https://res.cloudinary.com/mapimage/image/upload/v1651557508/product-1.1_uvdqpj.webp',
		name: 'Aliquam Lobortis',
		type: 'Apple',
		price: 550,
		quantity: 91,
	},
	{
		image: 'https://res.cloudinary.com/mapimage/image/upload/v1651557508/product-1.1_uvdqpj.webp',
		name: 'Aliquam Lobortis',
		type: 'Apple',
		price: 550,
		quantity: 91,
	},
	{
		image: 'https://res.cloudinary.com/mapimage/image/upload/v1651557508/product-1.1_uvdqpj.webp',
		name: 'Aliquam Lobortis',
		type: 'Apple',
		price: 550,
		quantity: 91,
	},
	{
		image: 'https://res.cloudinary.com/mapimage/image/upload/v1651557508/product-1.1_uvdqpj.webp',
		name: 'Aliquam Lobortis',
		type: 'Apple',
		price: 550,
		quantity: 91,
	},
]

const Products = () => {
	return (
		<div>
			<Sitemap title='Products' />
			<div className='product__container'>
				<div className='btn-group'>
					<span className='title'>Products</span>
					<Link to='/add-product' className='link'>
						<Button variant='contained' startIcon={<AddIcon />}>
							Add
						</Button>
					</Link>
				</div>
				<div className='table'>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Product Name</TableCell>
									<TableCell align='left'>Product Image</TableCell>
									<TableCell align='left'>Quantities</TableCell>
									<TableCell align='left'>Price</TableCell>
									<TableCell align='left'>Type</TableCell>
									<TableCell align='left'>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((value) => (
									<TableRow
										key={value.name}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell align='left'>{value.name}</TableCell>
										<TableCell className='cell' align='left'>
											<img className='img' src={value.image} alt={value.name}></img>
										</TableCell>

										<TableCell align='left'>{value.quantity}</TableCell>
										<TableCell align='left'>{value.price}</TableCell>
										<TableCell align='left'>{value.type}</TableCell>
										<TableCell align='left'>
											<Stack direction='row' spacing={1}>
												<Link to='/edit-product' className='link'>
													<Button variant='contained' startIcon={<EditIcon />}>
														Edit
													</Button>
												</Link>
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
	)
}
export default Products
