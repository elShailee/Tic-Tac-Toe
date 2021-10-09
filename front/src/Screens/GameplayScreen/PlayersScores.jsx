import React from 'react';
import { getOppositeMark } from 'Utils/gameUtils';
import { PlayersScoresContainer, PlayerContainer } from './styles';

export default function PlayersScores({ gameState, setGameState }) {
	const isLocal = gameState.gameMode === 'local';
	const breakIfRemote = !isLocal && <br />;

	const playerOne = {
		nick: gameState.playerOne.nickname,
		mark: isLocal ? gameState.startingPlayer : gameState.playerOne.mark,
		isWinner:
			(isLocal ? gameState.winState === gameState.startingPlayer : gameState.winState === gameState.playerOne.mark) &&
			'Winner!',
		winCount: gameState.playerOne.winCount || 0,
	};
	const playerTwo = {
		nick: gameState.playerTwo?.nickname,
		mark: isLocal ? getOppositeMark(gameState.startingPlayer) : gameState.playerTwo?.mark,
		isWinner:
			(isLocal
				? gameState.winState === getOppositeMark(gameState.startingPlayer)
				: gameState.winState === gameState.playerTwo?.mark) && 'Winner!',
		winCount: gameState.playerTwo?.winCount || 0,
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
				<br />
				<br />
				{playerOne.winCount}
				<br />
				<br />
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
				<br />
				<br />
				{playerTwo.winCount}
				<br />
				<br />
				{playerTwo.isWinner}
			</PlayerContainer>
		</PlayersScoresContainer>
	);
}
