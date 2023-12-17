import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/order-item'
import { calcTotalPrice, enumerate } from '../../components/utils'
import './order-page.css'
import { Link } from 'react-router-dom'
export const OrderPage = ({ onClick }) => {
	const items = useSelector(state => state.cart.itemsInCart)

	if (items.length < 1) {
		return (
			<div className='order-page'>
				<h1>Ваша корзина пуста!</h1>
			</div>
		)
	}

	return (
		<div className='order-page'>
			<div className='order-page__left'>
				{items.map(game => (
					<OrderItem game={game} />
				))}
			</div>
			<div className='order-page__right'>
				<div className='order-page__total-price'>
					<span>
						{items.length}{' '}
						{enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму{' '}
						{calcTotalPrice(items)} BYN
					</span>
					<Link to='/order/payment'>
						<button class='conf'>Купить</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
