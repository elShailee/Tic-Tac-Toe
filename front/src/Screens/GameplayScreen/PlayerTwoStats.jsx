import React from 'react';
import { PlayerTwoStatsContainer, PlayerTwoNameContainer, PlayerTwoName, PlayerTwoScore, WinnerLabel } from './styles';

export default function PlayerTwoStats({ gameState }) {
	const isThisPlayerTurn = gameState.turnState === 'X' && !gameState.winState;
	const isThisPlayerWinner = gameState.winState === 'X';

	return (
		<PlayerTwoStatsContainer>
			<PlayerTwoNameContainer shouldShowBG={isThisPlayerTurn || isThisPlayerWinner} />
			<PlayerTwoName>John Blow</PlayerTwoName>
			<PlayerTwoScore>2</PlayerTwoScore>
			{isThisPlayerWinner && <WinnerLabel player='two' />}
		</PlayerTwoStatsContainer>
	);
}
