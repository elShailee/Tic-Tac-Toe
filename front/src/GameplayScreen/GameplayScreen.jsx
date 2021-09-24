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

	const [loadId, setLoadId] = useState('');

	const resetGameState = async () => {
		const newGameState = await apiCallsHandler({
			action: 'putGame',
			data: { ...gameState, ...blankGameState },
		});
		setGameState(newGameState);
	};

	const createNewGame = async () => {
		const newGameState = await apiCallsHandler({
			action: 'postGame',
			data: blankGameState,
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
						{'Player Turn: ' + gameState.turnState}
						<br />
						{'Win State: ' + (gameState.winState || 'awaiting results...')}
						<button onClick={resetGameState}>Reset Board State</button>
						<br />
						{'Game ID: '}
						<input type='text' defaultValue={gameState.gameId} readOnly />
						<button onClick={() => setGameState(blankGameState)}>{'Save&Exit'}</button>
					</DataUtilsContainer>
				</GameContainer>
			) : (
				<div>
					<h2>Starting screen</h2>
					<button onClick={createNewGame}>new game</button>
					<form
						onSubmit={async e => {
							e.preventDefault();
							const gameInDB = await apiCallsHandler({ action: 'getGame', data: loadId });
							if (gameInDB) {
								setGameState(gameInDB);
								setLoadId('');
							} else setLoadId(false);
						}}
					>
						<input type='text' onChange={e => setLoadId(e.target.value)} />
						<input type='submit' value='Load Game' />
						{loadId === false && "  Game ID doesn't exist..."}
					</form>
				</div>
			)}
		</ScreenContainer>
	);
}
