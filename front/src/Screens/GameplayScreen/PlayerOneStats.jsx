import React from 'react';
import { PlayerOneStatsContainer, PlayerOneNameContainer, PlayerOneName, PlayerOneScore } from './styles';

export default function PlayerOneStats({ gameState }) {
	const isThisPlayerTurn = gameState.turnState === 'O' && !gameState.winState;

	return (
		<PlayerOneStatsContainer>
			<PlayerOneNameContainer shouldShowBG={isThisPlayerTurn} />
			<PlayerOneName>King Shailee</PlayerOneName>
			<PlayerOneScore>7</PlayerOneScore>
		</PlayerOneStatsContainer>
	);
}
