import React from 'react';
import GameGrid from './GameGrid';
import { DataUtilsContainer, GameContainer } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';

export default function GameplayScreen({ gameState, setGameState }) {
	// const resetGameState = async () => {
	// 	const newGameState = await apiCallsHandler.putGame({
	// 		...gameState,
	// 		...blankGameState,
	// 		turnState: gameState.startingPlayer,
	// 	});
	// 	newGameState && setGameState(newGameState);
	// };
	return 'gameplay';

	// return (
	// <GameContainer>
	// 	<GameGrid gameState={gameState} setGameState={setGameState} />
	// 	<DataUtilsContainer>
	// 		{'Player Turn: ' + gameState.turnState}
	// 		<br />
	// 		<br />

	// 		{'Win State: ' + (gameState.winState || 'awaiting results...')}
	// 		<br />
	// 		<br />
	// 		<button onClick={resetGameState}>Reset Board State</button>
	// 		<br />

	// 		{'Game ID: '}
	// 		<input type='text' defaultValue={gameState.gameId} readOnly disabled />
	// 		<br />

	// 		<button onClick={() => setGameState(blankGameState)}>{'Save&Exit'}</button>
	// 	</DataUtilsContainer>
	// </GameContainer>
	// );
}
