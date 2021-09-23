import React, { useState } from 'react';
import GameGrid from './GameGrid';
import { DataUtilsContainer, GameContainer, ScreenContainer } from './styles';
import { apiCallsHandler } from './Utils/axiosFuncs';

export default function GameplayScreen() {
	const blankBoard = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	const startingPlayer = 'X';
	const blankGameState = { boardState: blankBoard, turnState: startingPlayer, winState: false };
	const [gameState, setGameState] = useState(blankGameState);

	const resetGameState = async () => {
		const newGameState = await apiCallsHandler({
			action: 'putGame',
			gameState: { ...gameState, ...blankGameState },
		});
		setGameState(newGameState);
	};

	const createNewGame = async () => {
		const newGameState = await apiCallsHandler({
			action: 'postGame',
			gameState: blankGameState,
		});
		newGameState && setGameState({ ...newGameState, winState: false });
	};

	return (
		<ScreenContainer>
			<button onClick={() => console.log(gameState)}>log gameState</button>
			<button onClick={async () => console.log(await apiCallsHandler({ action: 'getGames' }))}>GET Games</button>
			<button
				onClick={async () => {
					console.log(await apiCallsHandler({ action: 'deleteGames' }));
					setGameState(blankGameState);
				}}
			>
				DELETE Games
			</button>
			<hr />
			{gameState.gameId ? (
				<GameContainer>
					<GameGrid gameState={gameState} setGameState={setGameState} />
					<DataUtilsContainer>
						{'Win State: ' + (gameState.winState || 'awaiting results...')}
						{gameState.winState && <button onClick={resetGameState}>Reset Board State</button>}
					</DataUtilsContainer>
				</GameContainer>
			) : (
				<div>
					<h2>Starting screen</h2>
					<button onClick={createNewGame}>new game</button>
				</div>
			)}
		</ScreenContainer>
	);
}
