import React from 'react';
import {
	PlayerTwoStatsContainer,
	PlayerTwoNameContainer,
	PlayerTwoName,
	PlayerTwoScore,
	WinnerLabel,
	TieLabel,
} from './styles';

export default function PlayerTwoStats({ gameState }) {
	const isThisPlayerTurn = gameState.turnState === 'X' && !gameState.winState;
	const isThisPlayerWinner = gameState.winState === 'X';
	const isTie = gameState.winState === 'Tie';

	return (
		<PlayerTwoStatsContainer>
			<PlayerTwoNameContainer shouldShowBG={isThisPlayerTurn || isThisPlayerWinner} />
			<PlayerTwoName>{gameState?.playerTwo?.nickname}</PlayerTwoName>
			<PlayerTwoScore>{gameState?.playerTwo?.winCount}</PlayerTwoScore>
			{isThisPlayerWinner && <WinnerLabel player='two' />}
			{isTie && <TieLabel player='one' />}
		</PlayerTwoStatsContainer>
	);
}
