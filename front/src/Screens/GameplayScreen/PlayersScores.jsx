import React from 'react';
import { getOppositeMark } from 'Utils/gameUtils';
import { PlayersScoresContainer, PlayerContainer } from './styles';

export default function PlayersScores({ gameState, setGameState }) {
	const isLocal = gameState.gameMode === 'local';
	const breakIfRemote = !isLocal && <br />;

	const playerOne = {
		nick: isLocal ? gameState.playerOne : gameState.playerOne.nickname,
		mark: isLocal ? gameState.startingPlayer : gameState.playerOne.mark,
		isWinner:
			(isLocal ? gameState.winState === gameState.startingPlayer : gameState.winState === gameState.playerOne.mark) &&
			'Winner!',
	};
	const playerTwo = {
		nick: isLocal ? gameState.playerTwo : gameState.playerTwo?.nickname,
		mark: isLocal ? getOppositeMark(gameState.startingPlayer) : gameState.playerTwo?.mark,
		isWinner:
			(isLocal
				? gameState.winState === getOppositeMark(gameState.startingPlayer)
				: gameState.winState === gameState.playerTwo?.mark) && 'Winner!',
	};

	return (
		<PlayersScoresContainer>
			<PlayerContainer>
				{!isLocal && (gameState.userPlayer.id === gameState.playerOne.id ? 'You' : 'Opponent')}
				{breakIfRemote}
				{breakIfRemote}
				{playerOne.mark}
				<br />
				<br />
				{playerOne.nick}
				{playerOne.isWinner && <br />}
				{playerOne.isWinner && <br />}
				{playerOne.isWinner}
			</PlayerContainer>
			<PlayerContainer>
				{!isLocal && (gameState.userPlayer.id === gameState.playerTwo?.id ? 'You' : 'Opponent')}
				{breakIfRemote}
				{breakIfRemote}
				{playerTwo.mark}
				<br />
				<br />
				{playerTwo.nick}
				{playerTwo.isWinner && <br />}
				{playerTwo.isWinner && <br />}
				{playerTwo.isWinner}
			</PlayerContainer>
		</PlayersScoresContainer>
	);
}
