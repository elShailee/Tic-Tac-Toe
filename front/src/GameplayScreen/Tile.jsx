import React from 'react';
import { TileContainer } from './styles';
import { getGameWinner } from './Utils/getGameWinner';

export default function Tile({ sessionData, row, col }) {
	const { turnState, setTurnState, boardState, setBoardState, winState, setWinState } = sessionData;
	const cellValue = boardState[row][col];

	let onPlayerClick = () => {
		if (!cellValue && !winState) {
			setTurnState(turnState === 'X' ? 'O' : 'X');

			const newBoardState = Array.from(boardState);
			newBoardState[row][col] = turnState;
			setBoardState(newBoardState);

			const newWinState = getGameWinner(boardState);
			if (newWinState) {
				setWinState(newWinState);
			}
		}
	};
	return <TileContainer onClick={onPlayerClick}>{cellValue}</TileContainer>;
}
