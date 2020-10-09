// Write your Character component here
import React from 'react';
import Details from './Details';

export default function Character(props) {
	return (
		<div className='character'>
			{props.char.id}
			{props.char.name}
			<Details char={props.char} />
			{/* <button onClick={() => openDetails(props.info.id)}>See Details</button> */}
		</div>
	);
}
