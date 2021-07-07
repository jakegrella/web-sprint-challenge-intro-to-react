// Write your Character component here
import React from 'react';
import Details from './Details';
import styled from 'styled-components';

const StyledCharacter = styled.div`
	width: 20%;
	background: ${(pr) => pr.theme.white};
	margin: 2%;
	padding: 2%;
	border-radius: 10px;
	img {
		margin: 4%;
		border-radius: 10px;
	}
	@media ${(pr) => pr.theme.breakpoints.medium} {
		width: 30%;
		margin: 0%;
		margin-bottom: 2%;
	}
	@media ${(pr) => pr.theme.breakpoints.small} {
		width: 70%;
		margin: 0%;
		margin-bottom: 2%;
	}
`;

export default function Character(props) {
	return (
		<StyledCharacter>
			<h2>{props.char.name}</h2>
			<img src={props.char.image} alt={props.char.name} />
			<Details char={props.char} />
		</StyledCharacter>
	);
}
