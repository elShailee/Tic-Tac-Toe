import React from 'react';
import { GameBoardContainer, Tile /*, GridContainer, GridRowContainer*/ } from './styles';
// import Tile from './Tile';

export default function GameBoard({ gameState, setGameState }) {
	// const renderGameGrid = () => {
	// 	let resultGrid = [];

	// 	for (let row = 0; row < 3; row++) {
	// 		let resultRow = [];

	// 		for (let col = 0; col < 3; col++) {
	// 			resultRow.push(<Tile key={row + col} gameState={gameState} setGameState={setGameState} row={row} col={col} />);
	// 		}
	// 		resultRow = <GridRowContainer key={row}>{resultRow}</GridRowContainer>;
	// 		resultGrid.push(resultRow);
	// 	}
	// 	resultGrid = <GridContainer>{resultGrid}</GridContainer>;

	// 	return resultGrid;
	// };

	// return renderGameGrid();

	return (
		<GameBoardContainer>
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
		</GameBoardContainer>
	);
}
