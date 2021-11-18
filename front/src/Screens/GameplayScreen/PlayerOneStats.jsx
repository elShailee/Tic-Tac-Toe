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
			<PlayerOneName>{gameState?.playerOne?.nickname}</PlayerOneName>
			<PlayerOneScore>{gameState?.playerOne?.winCount}</PlayerOneScore>
			{isThisPlayerWinner && <WinnerLabel player='one' />}
			{isTie && <TieLabel player='two' />}
		</PlayerOneStatsContainer>
	);
}
