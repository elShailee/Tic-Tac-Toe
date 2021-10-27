import React, { useEffect } from 'react';
import GameGrid from './GameGrid';
import { DataUtilsContainer, GameContainer } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';
import PlayersScores from './PlayersScores';

export default function Game({ gameState, setGameState }) {
	useEffect(() => {
		const refreshRemote = async () => {
			if (gameState.gameMode === 'remote') {
				const newGameState = await apiCallsHandler.refreshRemote(gameState);
				newGameState && setGameState(newGameState);
				!newGameState && setGameState({});
			}
		};

		const interval = setInterval(refreshRemote, 1500);
		return () => clearInterval(interval);
	}, [gameState, setGameState]);

	const resetGameState = async () => {
		const newGameState = await apiCallsHandler.resetGame(gameState);
		newGameState && setGameState(newGameState);
	};

	const leaveRemote = async () => {
		const newGameState = await apiCallsHandler.leaveRemote(gameState);
		newGameState && setGameState({});
	};

	const deleteLocal = async () => {
		const newGameState = await apiCallsHandler.deleteLocal(gameState);
		newGameState && setGameState(newGameState);
	};

	return (
		<GameContainer>
			{/* <GameGrid gameState={gameState} setGameState={setGameState} />
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

				{gameState.gameMode === 'local' && <button onClick={deleteLocal}>{'Delete Game'}</button>}
				{gameState.gameMode === 'local' && <button onClick={() => setGameState({})}>{'Save&Exit'}</button>}
				{gameState.gameMode === 'remote' && <button onClick={leaveRemote}>{'Leave Game'}</button>}
			</DataUtilsContainer>
			<PlayersScores gameState={gameState} setGameState={setGameState} /> */}
		</GameContainer>
	);
}
