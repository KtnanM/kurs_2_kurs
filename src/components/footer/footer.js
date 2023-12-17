import React from 'react'
import './footer.css'

export const Footer = () => {
	return (
		<footer class='footer'>
			<div id='container'>
				<div id='row'>
					<div class='col-md-3 col-6'>
						<h4>Информация</h4>
						<ul class='list-unstyled'>
							<li>
								<a href='#'>Главная</a>
							</li>
							<li>
								<a href='#'>О магазине</a>
							</li>
							<li>
								<a href='#'>Оплата и получение товара</a>
							</li>
							<li>
								<a href='#'>Контакты</a>
							</li>
						</ul>
					</div>

					<div class='col-md-3 col-6'>
						<h4>Время работы</h4>
						<ul class='list-unstyled'>
							<li>г. Молодечно, пр. Речной, 14</li>
							<li>сб-вс: 12:00 - 18:00</li>
							<li>перерыв 14:00 - 16:00</li>
						</ul>
					</div>

					<div class='col-md-3 col-6'>
						<h4>Контакты</h4>
						<ul class='list-unstyled'>
							<li>
								<a href='tel:5551234567'>Сокол Никита Сергеевич</a>
							</li>
							<li>
								<a href='tel:5551234568'>ФИТ ПОИБМС</a>
							</li>
							<li>
								<a href='tel:5551234569'>2 курс 8 группа</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
