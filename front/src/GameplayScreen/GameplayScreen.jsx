import React, { useState } from 'react';
import GameInterface from './GameInterface';
import { DataUtilsContainer, ScreenContainer } from './styles';

export default function GameplayScreen() {
	const blankBoard = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];
	const startingPlayer = 'X';
	const [turnState, setTurnState] = useState(startingPlayer);
	const [boardState, setBoardState] = useState(blankBoard);
	const [winState, setWinState] = useState(false);
	const sessionData = { turnState, setTurnState, boardState, setBoardState, winState, setWinState };

	const resetGameState = () => {
		setBoardState(blankBoard);
		setTurnState(startingPlayer);
		setWinState(false);
	};

	return (
		<ScreenContainer>
			<GameInterface sessionData={sessionData} />
			<DataUtilsContainer>
				{'Win State: ' + winState}
				<button onClick={resetGameState}>Reset Board State</button>
			</DataUtilsContainer>
		</ScreenContainer>
	);
}
