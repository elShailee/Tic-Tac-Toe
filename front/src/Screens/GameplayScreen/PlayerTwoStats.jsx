import React from 'react';
import { PlayerTwoStatsContainer, PlayerTwoNameContainer, PlayerTwoName, PlayerTwoScore } from './styles';

export default function PlayerTwoStats({ gameState }) {
	const isThisPlayerTurn = gameState.turnState === 'X' && !gameState.winState;

	return (
		<PlayerTwoStatsContainer>
			<PlayerTwoNameContainer shouldShowBG={isThisPlayerTurn} />
			<PlayerTwoName>John Blow</PlayerTwoName>
			<PlayerTwoScore>2</PlayerTwoScore>
		</PlayerTwoStatsContainer>
	);
}
