import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import { Searchbar } from '../srchbar'
import Menu from '../burgermenu/menu'
import './header.css'

export const Header = ({ onChange }) => {
	const handleChange = val => {
		onChange(val)
	}

	return (
		<div className='header'>
			<div className='wrapper'>
				<Link to='/' className='header__store-title'>
					Магазин Игр
				</Link>
			</div>
			<Searchbar onChange={handleChange} />
			<div className='wrapper header__cart-btn-wrapper'>
				<CartBlock />
			</div>
			<Menu />
		</div>
	)
}
