import React, { useState, useEffect } from 'react'
import { GameItem } from '../../components/game-item'
import './home-page.css'

export const HomePage = ({ val }) => {
	const [jsonData, setJsonData] = useState(null)

	useEffect(() => {
		// Функция для получения JSON-файла
		const fetchJsonData = async () => {
			try {
				const response = await fetch('http://localhost:4000') // Замените URL на ваш сервер

				if (!response.ok) {
					throw new Error('Ошибка получения JSON-файла')
				}

				const data = await response.json()
				setJsonData(data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchJsonData()
	}, [])
	if (jsonData) {
		const filteredgames = jsonData.filter(game => {
			return game.title.toLowerCase().includes(val.toLowerCase())
		})
		return (
			<div className='home-page'>
				{filteredgames.map(game => (
					<GameItem game={game} key={game.id} />
				))}
			</div>
		)
	}
}
