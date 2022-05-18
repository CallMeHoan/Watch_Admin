import React from 'react'
import './styles.scss'

export const Sitemap = (props) => {
	return (
		<div className='sitemap'>
			<span className='title'>{props.title}</span>
			<div className='links'>
				<span className='uplon'>Uplon</span>
				<span className='slash'>/</span>
				<span className='site'>{props.title}</span>
			</div>
		</div>
	)
}
