import React from 'react';
import {
	PlayerOneStatsContainer,
	PlayerOneNameContainer,
	PlayerOneName,
	PlayerOneScore,
	WinnerLabel,
	TieLabel,
} from './styles';

export default function PlayerOneStats({ gameState }) {
	const isThisPlayerTurn = gameState.turnState === 'O' && !gameState.winState;
	const isThisPlayerWinner = gameState.winState === 'O';
	const isTie = gameState.winState === 'Tie';

	return (
		<PlayerOneStatsContainer>
			<PlayerOneNameContainer shouldShowBG={isThisPlayerTurn || isThisPlayerWinner} />
			<PlayerOneName>King Shailee</PlayerOneName>
			<PlayerOneScore>7</PlayerOneScore>
			{isThisPlayerWinner && <WinnerLabel player='one' />}
			{isTie && <TieLabel player='two' />}
		</PlayerOneStatsContainer>
	);
}
