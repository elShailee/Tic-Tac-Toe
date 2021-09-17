import React from 'react';
import { GridContainer, GridRowContainer } from './styles';
import Tile from 'GameplayScreen/Tile';

export default function GameInterface({ sessionData }) {
	const renderGrid = () => {
		let result = [];
		for (let row = 0; row < 3; row++) {
			let resultRow = [];
			for (let col = 0; col < 3; col++) {
				resultRow.push(<Tile key={row + col} sessionData={sessionData} row={row} col={col} />);
			}
			resultRow = <GridRowContainer key={row}>{resultRow}</GridRowContainer>;
			result.push(resultRow);
		}
		result = <GridContainer>{result}</GridContainer>;
		return result;
	};

	return renderGrid();
}
