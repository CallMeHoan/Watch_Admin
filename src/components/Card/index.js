import React from 'react'
import './styles.scss'
import CountUp from 'react-countup'

export const Card = (props) => {
	return (
		<div className='card'>
			<div className='criteria'>
				<span className='criteria__name'>{props.name}</span>
				<img src={props.image} alt='Image' className='icon__image' />
			</div>
			<CountUp
				separator=' '
				decimals={1}
				decimal=','
				start={0}
				end={props.value}
				className='value'
			/>
			<span className='period'>Total Supplies</span>
		</div>
	)
}
