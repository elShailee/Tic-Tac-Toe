import React from 'react';
import { TileContainer } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';
import { getGameWinner, getOppositeMark } from 'Utils/gameUtils';

export default function Tile({ gameState, setGameState, row, col }) {
	const cellValue = gameState.boardState[row][col];

	let onPlayerClick = async () => {
		if (!cellValue && !gameState.winState) {
			if (
				gameState.gameMode === 'local' ||
				(gameState.gameMode === 'remote' && gameState.turnState === gameState.userPlayer.mark)
			) {
				const gameStateAfterMove = gameState;
				gameStateAfterMove.boardState[row][col] = gameState.turnState;
				gameStateAfterMove.turnState = getOppositeMark(gameState.turnState);
				gameStateAfterMove.winState = getGameWinner(gameStateAfterMove.boardState);

				let newGameState = null;
				if (gameState.gameMode === 'local') {
					newGameState = await apiCallsHandler.moveLocal(gameStateAfterMove);
				}
				if (gameState.gameMode === 'remote') {
					newGameState = await apiCallsHandler.moveRemote(gameStateAfterMove);
				}

				newGameState && setGameState(newGameState);
			}
		}
	};
	return <TileContainer onClick={onPlayerClick}>{cellValue}</TileContainer>;
}
