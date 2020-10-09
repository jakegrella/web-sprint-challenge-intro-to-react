import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
	h3,
	h4 {
		margin-bottom: 2%;
	}
`;

export default function Details(props) {
	return (
		<StyledDetails>
			<h3>Species: {props.char.species}</h3>
			<h4>Origin: {props.char.origin.name}</h4>
			<h4>Location: {props.char.location.name}</h4>
		</StyledDetails>
	);
}
