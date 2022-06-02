import React from 'react'
import { Sitemap } from '../../components'
import SaveIcon from '@mui/icons-material/Save'
import Button from '@mui/material/Button'
import ImageGallery from 'react-image-gallery'
import Dropzone from 'react-dropzone'

import './styles.scss'

const images = [
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/',
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/',
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/',
	},
]

const EditProduct = () => {
	return (
		<div>
			<Sitemap title='Edit Product'></Sitemap>
			<div className='edit__container'>
				<div className='btn-group'>
					<span className='title'>Edit Product</span>
					<Button variant='contained' startIcon={<SaveIcon />}>
						Save changes
					</Button>
				</div>
				<div className='form-container'>
					<div className='images-container'>
						<span className='title'>Product Images</span>
						<ImageGallery
							className='image-gallery'
							items={images}
							showPlayButton={false}
							disableSwipe={false}
							showFullscreenButton={false}
							showNav={false}
						/>
					</div>
					<div className='product-info'>
						<span className='title'>Products information</span>
						<div className='product-info-container'>
							<div className='container'>
								<div className='form'>
									<div className='field'>Product Name</div>
									<input type='text' className='input' placeholder='Thien Hoan'></input>
								</div>
								<div className='form'>
									<div className='field'>Quantities</div>
									<input type='text' className='input' placeholder='Thien'></input>
								</div>
							</div>
							<div className='container'>
								<div className='form'>
									<div className='field'>Price</div>
									<input type='text' className='input' placeholder='Hoan'></input>
								</div>
								<div className='form'>
									<div className='field'>Product Type</div>
									<input type='text' className='input' placeholder='Admin'></input>
								</div>
							</div>
							<div className='field'>Product Images</div>
							<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
								{({ getRootProps, getInputProps }) => (
									<section className='dropzone'>
										<div {...getRootProps()}>
											<input {...getInputProps()} />
											<p className='text'>Choose multiple or drag images here!</p>
										</div>
									</section>
								)}
							</Dropzone>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default EditProduct
