import React, { useEffect } from 'react';
import GameBoard from './GameBoard';
import { GameContainer, TitleContainer } from './styles';
import PlayerOneStats from './PlayerOneStats';
import PlayerTwoStats from './PlayerTwoStats';
import HomeScreen from 'Screens/HomeScreen/HomeScreen';
import apiCallsHandler from 'Utils/axiosFuncs';
import AdvancedOptions from 'Screens/AdvancedScreen/AdvancedOptions';
import AboutMe from '../AboutSection/AboutMe';
// import PlayersScores from './PlayersScores';

export default function Game({ gameState, setGameState, changeThemes }) {
	let numOfPlayers = 0;
	if (gameState.playerOne) {
		numOfPlayers++;
	}
	if (gameState.playerTwo) {
		numOfPlayers++;
	}
	const isJoining = gameState?.gameMode === 'remote' && numOfPlayers === 1 && !gameState?.userPlayer;

	useEffect(() => {
		const refreshRemote = async () => {
			if (gameState.gameMode === 'remote' && gameState.userPlayer) {
				const newGameState = await apiCallsHandler.refreshRemote(gameState);
				newGameState && setGameState(newGameState);
				!newGameState && setGameState({});
			}
		};

		const interval = setInterval(refreshRemote, 250);
		return () => clearInterval(interval);
	}, [gameState, setGameState]);

	// const resetGameState = async () => {
	// 	const newGameState = await apiCallsHandler.resetGame(gameState);
	// 	newGameState && setGameState(newGameState);
	// };

	// const leaveRemote = async () => {
	// 	const newGameState = await apiCallsHandler.leaveRemote(gameState);
	// 	newGameState && setGameState({});
	// };

	// const deleteLocal = async () => {
	// 	const newGameState = await apiCallsHandler.deleteLocal(gameState);
	// 	newGameState && setGameState(newGameState);
	// };

	return (
		<GameContainer>
			<TitleContainer>Tic Tac Toe</TitleContainer>
			{gameState?.gameId && !isJoining && <PlayerOneStats gameState={gameState} />}
			{gameState?.gameId && !isJoining && <GameBoard gameState={gameState} setGameState={setGameState} />}
			{gameState?.gameId && !isJoining && <PlayerTwoStats gameState={gameState} />}

			<AboutMe />
			<AdvancedOptions gameState={gameState} setGameState={setGameState} changeThemes={changeThemes} />
			<HomeScreen gameState={gameState} setGameState={setGameState} isJoining={isJoining} />
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
