import React from 'react';
import { TileStyle } from './styles';

export default function Tile({ turnState, setTurnState, row, col, boardState, setBoardState }) {
	const cellValue = boardState[row][col];

	let clickHandler = () => {
		if (!cellValue) {
			setTurnState(turnState === 'X' ? 'O' : 'X');
			const newBoardState = Array.from(boardState);
			newBoardState[row][col] = turnState;
			setBoardState(newBoardState);
		}
	};
	return <TileStyle onClick={clickHandler}>{cellValue}</TileStyle>;
}
