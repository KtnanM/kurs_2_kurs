import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	const [isActive, setIsActive] = useState(false)

	const toggleMenu = () => {
		setIsActive(!isActive)
		document.body.classList.toggle('no-scroll')
	}
	const closeMenu = () => {
		setIsActive(false)
		document.body.classList.remove('no-scroll')
	}
	return (
		<>
			<header>
				<div
					className={`menu-btn ${isActive ? 'active' : ''}`}
					onClick={toggleMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</header>
			<div className={`menu ${isActive ? 'active' : ''}`}>
				<nav>
					<ul>
						<li onClick={closeMenu}>
							<Link to='/'>Главная</Link>
						</li>
						<li onClick={closeMenu}>
							<Link to='/order'>Корзина</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Menu
