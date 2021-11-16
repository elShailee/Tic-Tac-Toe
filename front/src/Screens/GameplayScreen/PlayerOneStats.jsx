import React from 'react';
import { PlayerOneStatsContainer, PlayerOneNameContainer, PlayerOneName, PlayerOneScore } from './styles';

export default function PlayerOneStats({ gameState }) {
	const isThisPlayerTurn = gameState.turnState === 'O' && !gameState.winState;
	const isThisPlayerWinner = gameState.winState === 'O';

	return (
		<PlayerOneStatsContainer>
			<PlayerOneNameContainer shouldShowBG={isThisPlayerTurn} />
			<PlayerOneName>King Shailee</PlayerOneName>
			<PlayerOneScore>7</PlayerOneScore>
			{isThisPlayerWinner && 'Winner!'}
		</PlayerOneStatsContainer>
	);
}
