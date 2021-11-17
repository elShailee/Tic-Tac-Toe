import React from 'react';
import { useTheme } from 'styled-components';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameBoardContainer, RestartButton /*, Tile , GridContainer, GridRowContainer*/ } from './styles';
import Tile from './Tile';
// import Tile from './Tile';

export default function GameBoard({ gameState, setGameState }) {
	const theme = useTheme();

	const resetGameState = async () => {
		const newGameState = await apiCallsHandler.resetGame(gameState);
		newGameState && setGameState(newGameState);
	};

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
			<Tile gameState={gameState} setGameState={setGameState} row={0} col={0} />
			<Tile gameState={gameState} setGameState={setGameState} row={0} col={1} />
			<Tile gameState={gameState} setGameState={setGameState} row={0} col={2} />
			<Tile gameState={gameState} setGameState={setGameState} row={1} col={0} />
			<Tile gameState={gameState} setGameState={setGameState} row={1} col={1} />
			<Tile gameState={gameState} setGameState={setGameState} row={1} col={2} />
			<Tile gameState={gameState} setGameState={setGameState} row={2} col={0} />
			<Tile gameState={gameState} setGameState={setGameState} row={2} col={1} />
			<Tile gameState={gameState} setGameState={setGameState} row={2} col={2} />
			{gameState?.winState && <RestartButton src={theme.images.restartIcon} onClick={resetGameState} />}
		</GameBoardContainer>
	);
}
