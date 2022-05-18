import React from 'react'
import './styles.scss'
import { Sitemap, Card } from '../../components'
import Chart from '../../assets/chart.png'
import Layers from '../../assets/layers.png'
import Paypal from '../../assets/paypal.png'
import Rocket from '../../assets/rocket.png'

const mock = [
	{
		name: 'ORDERS',
		image: Layers,
		value: 1570,
	},
	{
		name: 'REVENUE',
		image: Paypal,
		value: 46782,
	},
	{
		name: 'AVERAGE PRICE',
		image: Chart,
		value: 15.9,
	},
	{
		name: 'PRODUCT SOLD',
		image: Rocket,
		value: 1809,
	},
]

const Dashboard = () => {
	return (
		<div>
			<Sitemap title='Dashboard' />
			<div className='dashboard'>
				<div className='dashboard__container'>
					<div className='dashboard__card'>
						{mock.map((item) => (
							<Card name={item.name} image={item.image} value={item.value} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
