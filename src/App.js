import React, { useState, useEffect } from 'react';
import './styles/App.css';
import axios from 'axios';
import Character from './components/Character';

export default function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [characters, setCharacters] = useState([]);
	const [currentCharacterId, setCurrentCharacterId] = useState(null);

	const openDetails = (id) => {
		setCurrentCharacterId(id);
	};
	const closeDetails = () => {
		setCurrentCharacterId(null);
	};

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {
		const fetchCharacters = () => {
			axios
				.get(`https://rickandmortyapi.com/api/character`)
				.then((response) => {
					// console.log('response.data.results', response.data.results);
					setCharacters(response.data.results);
				})
				.catch((error) => {
					console.dir(error);
				});
		};
		fetchCharacters();
	}, []);

	// console.log('chars1', characters);
	return (
		<div className='App'>
			<h1 className='Header'>Characters</h1>
			{characters.map((char) => {
				return <Character key={char.id} char={char} />;
			})}
		</div>
	);
}
