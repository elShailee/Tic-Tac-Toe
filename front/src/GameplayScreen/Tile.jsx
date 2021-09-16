import React, { useState } from 'react';
import { TileStyle } from './styles';

export default function Tile({ turnState, setTurnState }) {
	let [cellValue, setCellValue] = useState('');

	let clickHandler = () => {
		if (cellValue === '') {
			setCellValue(turnState === 'X' ? 'X' : 'O');
			setTurnState(turnState === 'X' ? 'O' : 'X');
		}
	};
	return <TileStyle onClick={clickHandler}>{cellValue}</TileStyle>;
}
