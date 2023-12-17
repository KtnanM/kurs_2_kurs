import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'
import './payment-page.css'

const oops = () => {
	alert('Спасибо за покупку')
	window.location.assign('http://localhost:3000/')
}

export default class Paymentpage extends React.Component {
	state = {
		cvc: '',
		expiry: '',
		focus: '',
		name: '',
		number: '',
		agreementChecked: false,
	}
	handleInputFocus = e => {
		this.setState({ focus: e.target.name })
	}
	handleInputChange = e => {
		const { name, value } = e.target

		this.setState({ [name]: value })
	}
	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = e => {
		e.preventDefault()
		if (this.state.agreementChecked) {
			// Proceed with form submission or other actions
			oops()
		} else {
			// Handle the case where the agreement is not checked
			alert('Please agree to the terms and conditions.')
		}
	}
	handleAgreementChange = () => {
		this.setState(prevState => ({
			agreementChecked: !prevState.agreementChecked,
		}))
	}

	render() {
		return (
			<div class='kostya'>
				<div id='PaymentForm'>
					<Cards
						cvc={this.state.cvc}
						expiry={this.state.expiry}
						focused={this.state.focus}
						name={this.state.name}
						number={this.state.number}
					/>
					<form id='paym' onSubmit={this.handleSubmit}>
						<input
							className='paymin osn'
							type='tel'
							name='number'
							placeholder='номер карты'
							onChange={this.handleInputChange}
							onFocus={this.handleInputFocus}
						/>
						<input
							type='tel'
							className='paymin osn'
							name='name'
							placeholder='имя'
							onChange={this.handleInputChange}
							onFocus={this.handleInputFocus}
						/>
						<div className='kostyl'>
							<input
								type='tel'
								className='paymin sec'
								name='expiry'
								placeholder='дата'
								onChange={this.handleInputChange}
								onFocus={this.handleInputFocus}
							/>
							<input
								type='tel'
								className='paymin sec'
								name='cvc'
								placeholder='cvc'
								onChange={this.handleInputChange}
								onFocus={this.handleInputFocus}
							/>
						</div>
						<div className='agr'>
							<input
								type='checkbox'
								className='agrement'
								checked={this.state.agreementChecked}
								onChange={this.handleAgreementChange}
							/>
							Оформляя заказ, вы соглашаетесь с Terms and Conditions,
							Договором-оферты, <br />
							Соглашением об обработке данных.
						</div>
						<input
							type='submit'
							class='btn-conf'
							onClick={this.handleSubmit}
							value='Оплатить'
						/>
					</form>
				</div>
			</div>
		)
	}
}
