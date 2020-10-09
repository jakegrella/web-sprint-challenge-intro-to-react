// Write your Character component here
import React from 'react';
import Details from './Details';

export default function Character(props) {
	return (
		<div className='character'>
			<img src={props.char.image} alt={props.char.name} />
			<h2>{props.char.name}</h2>
			<Details char={props.char} />
		</div>
	);
}
