import React, { useEffect } from 'react';

export default function Details(props) {
	return (
		<div>
			<h3>Species: {props.char.species}</h3>
			<h4>Origin: {props.char.origin.name}</h4>
			<h4>Location: {props.char.location.name}</h4>
		</div>
	);
}
