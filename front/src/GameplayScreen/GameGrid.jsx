import React from 'react';
import { GridContainer, GridRowContainer } from './styles';
import Tile from 'GameplayScreen/Tile';

export default function GameGrid({ sessionData }) {
	const renderGameGrid = () => {
		let resultGrid = [];

		for (let row = 0; row < 3; row++) {
			let resultRow = [];

			for (let col = 0; col < 3; col++) {
				resultRow.push(<Tile key={row + col} sessionData={sessionData} row={row} col={col} />);
			}
			resultRow = <GridRowContainer key={row}>{resultRow}</GridRowContainer>;
			resultGrid.push(resultRow);
		}
		resultGrid = <GridContainer>{resultGrid}</GridContainer>;

		return resultGrid;
	};

	return renderGameGrid();
}
