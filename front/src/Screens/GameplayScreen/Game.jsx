import React, { useEffect } from 'react';
import GameBoard from './GameBoard';
import { GameContainer, TitleContainer } from './styles';
import PlayerOneStats from './PlayerOneStats';
import PlayerTwoStats from './PlayerTwoStats';
import HomeScreen from 'Screens/HomeScreen/HomeScreen';
import apiCallsHandler from 'Utils/axiosFuncs';
import AdvancedOptions from 'Screens/AdvancedScreen/AdvancedOptions';
import AboutMe from '../AboutSection/AboutMe';

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

	return (
		<GameContainer>
			<TitleContainer>Tic Tac Toe</TitleContainer>
			{gameState?.gameId && !isJoining && <PlayerOneStats gameState={gameState} setGameState={setGameState} />}
			{gameState?.gameId && !isJoining && <GameBoard gameState={gameState} setGameState={setGameState} />}
			{gameState?.gameId && !isJoining && <PlayerTwoStats gameState={gameState} setGameState={setGameState} />}

			<AboutMe />
			<AdvancedOptions gameState={gameState} setGameState={setGameState} changeThemes={changeThemes} />
			<HomeScreen gameState={gameState} setGameState={setGameState} isJoining={isJoining} />
		</GameContainer>
	);
}
