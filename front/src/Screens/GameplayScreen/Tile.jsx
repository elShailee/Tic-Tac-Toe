import React from 'react';
import { TileContainer } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';
import { getGameWinner } from 'Utils/gameUtils';

export default function Tile({ gameState, setGameState, row, col }) {
	const { turnState, boardState, winState } = gameState;
	const cellValue = boardState[row][col];

	let onPlayerClick = async () => {
		if (!cellValue && !winState) {
			const newBoardState = Array.from(boardState);
			newBoardState[row][col] = turnState;
			const newWinState = getGameWinner(boardState);

			const newGameState = await apiCallsHandler.putGame({
				...gameState,
				boardState: newBoardState,
				turnState: gameState.turnState === 'X' ? 'O' : 'X',
				winState: newWinState,
				isBlankGame: false,
			});
			newGameState && setGameState(newGameState);
		}
	};
	return <TileContainer onClick={onPlayerClick}>{cellValue}</TileContainer>;
}
