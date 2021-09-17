import React from 'react';
import { TileStyle } from './styles';
import { checkForWins } from './Utils/checkForWins';

export default function Tile({ sessionData, row, col }) {
	const { turnState, setTurnState, boardState, setBoardState, winState, setWinState } = sessionData;
	const cellValue = boardState[row][col];

	let clickHandler = () => {
		if (!cellValue && !winState) {
			setTurnState(turnState === 'X' ? 'O' : 'X');
			const newBoardState = Array.from(boardState);
			newBoardState[row][col] = turnState;
			setBoardState(newBoardState);
			const winner = checkForWins(boardState);
			if (winner) {
				setWinState(winner === 'X' ? 'X' : 'O');
			}
		}
	};
	return <TileStyle onClick={clickHandler}>{cellValue}</TileStyle>;
}
