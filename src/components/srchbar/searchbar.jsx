import React, { Component, useState } from 'react'
import './searchbar.css'

export const Searchbar = ({ onChange }) => {
	const handleChange = event => {
		onChange(event.target.value)
	}
	return (
		<input
			type='text'
			name='input'
			class='search'
			id='search-input'
			placeholder='что ищем?'
			onChange={handleChange}
		/>
	)
}
