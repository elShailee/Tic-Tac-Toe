import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import {
	PlayerOneStatsContainer,
	PlayerOneNameContainer,
	PlayerOneName,
	PlayerOneScore,
	WinnerLabel,
	TieLabel,
	NicknameInputBox,
	NameTextBoxContaier,
} from './styles';

export default function PlayerOneStats({ gameState, setGameState }) {
	const isThisPlayerTurn = gameState.turnState === 'O' && !gameState.winState;
	const isThisPlayerWinner = gameState.winState === 'O';
	const isTie = gameState.winState === 'Tie';

	const [isEditingState, setIsEditingState] = useState(false);
	const [newNicknameState, setNewNicknameState] = useState(gameState.playerOne?.nickname);
	const connectionState = useSelector(connectionModeSelector);

	const tryToEditNickname = () => {
		if (
			gameState.gameMode === 'local' ||
			(gameState.gameMode === 'remote' && gameState.playerOne?.id === gameState.userPlayer.id)
		) {
			setIsEditingState(true);
		}
	};

	const nameSubmit = async () => {
		setIsEditingState(false);
		if (newNicknameState?.length >= 3 && newNicknameState?.length <= 30) {
			const messageData = {
				...gameState,
				playerOne: {
					...gameState.playerOne,
					nickname: newNicknameState,
				},
			};
			const apiFunc = gameState.gameMode === 'local' ? 'renameLocal' : 'renameRemote';
			if (connectionState === 'polling') {
				const newGameState = await networkHandlers.polling[apiFunc](messageData);
				newGameState && setGameState(newGameState);
			} else if (connectionState === 'socket') {
				networkHandlers.socket[apiFunc](messageData);
			}
		}
	};

	const inputHandler = e => {
		const keyCode = e.keyCode;
		if (keyCode === 27) {
			setIsEditingState(false);
		} else if (keyCode === 13) {
			nameSubmit();
		}
	};

	return (
		<PlayerOneStatsContainer>
			<PlayerOneNameContainer shouldShowBG={isThisPlayerTurn || isThisPlayerWinner} />
			{isEditingState ? (
				<NameTextBoxContaier onSubmit={nameSubmit}>
					<NicknameInputBox
						onChange={e => setNewNicknameState(e.target.value)}
						onKeyDown={e => inputHandler(e)}
						defaultValue={gameState.playerOne?.nickname}
					/>
				</NameTextBoxContaier>
			) : (
				<PlayerOneName onClick={tryToEditNickname}>{gameState?.playerOne?.nickname}</PlayerOneName>
			)}
			<PlayerOneScore>{gameState?.playerOne?.winCount}</PlayerOneScore>
			{isThisPlayerWinner && <WinnerLabel player='one' />}
			{isTie && <TieLabel player='two' />}
		</PlayerOneStatsContainer>
	);
}
