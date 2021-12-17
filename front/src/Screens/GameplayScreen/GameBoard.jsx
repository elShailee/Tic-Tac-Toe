import React from 'react';
import { useSelector } from 'react-redux';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';
import { useTheme } from 'styled-components';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import { GameBoardContainer, RestartButton } from './styles';
import Tile from './Tile';

export default function GameBoard({ gameState, setGameState }) {
	const theme = useTheme();
	const connectionState = useSelector(connectionModeSelector);

	const resetGameState = async () => {
		if (connectionState === 'polling') {
			const newGameState = await networkHandlers.polling.resetGame(gameState);
			newGameState && setGameState(newGameState);
		} else if (connectionState === 'socket') {
			networkHandlers.socket.resetGame(gameState);
		}
	};

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
