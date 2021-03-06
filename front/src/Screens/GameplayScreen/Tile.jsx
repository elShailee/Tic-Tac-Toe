import React from 'react';
import { useTheme } from 'styled-components';
import { TileContainer, TileMark } from './styles';
import apiCallsHandler from 'Utils/axiosFuncs';
import { getGameWinner, getOppositeMark } from 'Utils/gameUtils';

export default function Tile({ gameState, setGameState, row, col }) {
	const theme = useTheme();

	const cellValue = gameState.boardState[row][col];
	let cellMark = false;
	if (cellValue === 'X') {
		cellMark = <TileMark src={theme.images.colorfulXIcon} alt='X' />;
	}
	if (cellValue === 'O') {
		cellMark = <TileMark src={theme.images.colorfulOIcon} alt='O' />;
	}

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

	const shouldHint = () => {
		if (cellMark || gameState.winState) return false;
		if (gameState.gameMode === 'local') {
			return gameState.turnState;
		}
		if (
			gameState.gameMode === 'remote' &&
			gameState.userPlayer.mark === gameState.turnState &&
			gameState.playerOne &&
			gameState.playerTwo
		) {
			return gameState.turnState;
		}
		return null;
	};

	const hintImage = () => {
		if (shouldHint() === 'O') return theme.images.hintOIcon;
		if (shouldHint() === 'X') return theme.images.hintXIcon;
	};

	return (
		<TileContainer onClick={onPlayerClick} row={row} column={col} shouldHint={shouldHint()} hintImage={hintImage()}>
			{cellMark}
		</TileContainer>
	);
}
