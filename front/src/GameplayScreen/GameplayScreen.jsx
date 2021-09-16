import React, { useState } from 'react';
import { ScreenContainer, GridContainer, GridRowContainer } from './styles';
import Tile from 'GameplayScreen/Tile';

export default function GameplayScreen() {
	const [turnState, setTurnState] = useState('O');

	const renderGrid = () => {
		let result = [];
		for (let row = 0; row < 3; row++) {
			let resultRow = [];
			for (let col = 0; col < 3; col++) {
				resultRow.push(<Tile key={row + col} turnState={turnState} setTurnState={setTurnState} />);
			}
			resultRow = <GridRowContainer key={row}>{resultRow}</GridRowContainer>;
			result.push(resultRow);
		}
		result = <GridContainer>{result}</GridContainer>;
		return result;
	};

	return <ScreenContainer>{renderGrid()}</ScreenContainer>;
}
