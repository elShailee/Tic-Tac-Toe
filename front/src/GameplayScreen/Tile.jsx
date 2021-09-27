import React from 'react';
import { TileContainer } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';
import { getGameWinner } from 'Utils/getGameWinner';

export default function Tile({ gameState, setGameState, row, col }) {
	const { turnState, boardState, winState } = gameState;
	const cellValue = boardState[row][col];

	let onPlayerClick = async () => {
		if (!cellValue && !winState) {
			const newBoardState = Array.from(boardState);
			newBoardState[row][col] = turnState;
			const newWinState = getGameWinner(boardState);

			const newGameState = await apiCallsHandler.putGame({
				gameId: gameState.gameId,
				boardState: newBoardState,
				turnState: gameState.turnState === 'X' ? 'O' : 'X',
				winState: newWinState,
			});
			newGameState && setGameState(newGameState);
		}
	};
	return <TileContainer onClick={onPlayerClick}>{cellValue}</TileContainer>;
}
