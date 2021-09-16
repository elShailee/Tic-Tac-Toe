import React from 'react';
import { ScreenContainer, Tile, GridContainer, GridRowContainer } from './styled';

export default function GameplayScreen() {
	const renderGrid = () => {
		let result = [];
		for (let row = 0; row < 3; row++) {
			let resultRow = [];
			for (let col = 0; col < 3; col++) {
				resultRow.push(<Tile key={row + col} />);
			}
			resultRow = <GridRowContainer key={row}>{resultRow}</GridRowContainer>;
			result.push(resultRow);
		}
		result = <GridContainer>{result}</GridContainer>;
		return result;
	};

	return <ScreenContainer>{renderGrid()}</ScreenContainer>;
}
