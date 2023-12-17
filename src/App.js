import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { HomePage } from './pages/home-page'
import { GamePage } from './pages/game-page'
import { OrderPage } from './pages/order-page'
import { Provider } from 'react-redux'
import { store } from './store'
import { useState } from 'react'

import Paymentpage from './pages/payment-page/payment-page'

function App() {
	const [smval, Setsmval] = useState('')
	const handleChange = val => {
		Setsmval(val)
	}
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header onChange={handleChange} />
					<Routes>
						<Route path='/order' element=<OrderPage /> />
						<Route path='/app/:title' element=<GamePage /> />
						<Route path='/' element=<HomePage val={smval} /> />
						<Route path='/order/payment' element=<Paymentpage /> />
					</Routes>
				</div>
			</Router>
		</Provider>
	)
}

export default App
