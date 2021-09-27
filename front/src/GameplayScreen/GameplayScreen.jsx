import React, { useState } from 'react';
import GameGrid from './GameGrid';
import { DataUtilsContainer, GameContainer, ScreenContainer } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';

export default function GameplayScreen() {
	const blankBoard = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	const startingPlayer = 'X';
	const blankGameState = { boardState: blankBoard, turnState: startingPlayer, winState: false };
	const [gameState, setGameState] = useState(blankGameState);

	const [loadId, setLoadId] = useState('');

	const resetGameState = async () => {
		const newGameState = await apiCallsHandler.putGame({ ...gameState, ...blankGameState });
		newGameState && setGameState(newGameState);
	};

	const createNewGame = async () => {
		setLoadId('');
		const newGameState = await apiCallsHandler.postGame(blankGameState);
		newGameState && setGameState(newGameState);
	};

	return (
		<ScreenContainer>
			<button onClick={() => console.log(gameState)}>log gameState</button>
			<button onClick={async () => console.log(await apiCallsHandler.getGames())}>GET Games</button>
			<button
				onClick={async () => {
					console.log(await apiCallsHandler.deleteGames());
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
						{'Player Turn: ' + gameState.turnState}
						<br />
						<br />

						{'Win State: ' + (gameState.winState || 'awaiting results...')}
						<br />
						<br />
						<button onClick={resetGameState}>Reset Board State</button>
						<br />

						{'Game ID: '}
						<input type='text' defaultValue={gameState.gameId} readOnly disabled />
						<br />

						<button onClick={() => setGameState(blankGameState)}>{'Save&Exit'}</button>
					</DataUtilsContainer>
				</GameContainer>
			) : (
				<div>
					<h2>Starting screen</h2>
					<button onClick={createNewGame}>new game</button>
					<br />

					<input type='text' onChange={e => setLoadId(e.target.value)} />
					<button
						onClick={async () => {
							let gameInDB = null;
							if (loadId) {
								gameInDB = await apiCallsHandler.getGame(loadId);
							}
							if (gameInDB) {
								setGameState(gameInDB);
								setLoadId('');
							} else setLoadId(false);
						}}
					>
						Load Game
					</button>
					{loadId === false && "  Game ID doesn't exist..."}
				</div>
			)}
		</ScreenContainer>
	);
}
