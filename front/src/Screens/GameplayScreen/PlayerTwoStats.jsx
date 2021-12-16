import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import {
	PlayerTwoStatsContainer,
	PlayerTwoNameContainer,
	PlayerTwoName,
	PlayerTwoScore,
	WinnerLabel,
	TieLabel,
	NicknameInputBox,
	NameTextBoxContaier,
} from './styles';

export default function PlayerTwoStats({ gameState, setGameState }) {
	const isThisPlayerTurn = gameState.turnState === 'X' && !gameState.winState;
	const isThisPlayerWinner = gameState.winState === 'X';
	const isTie = gameState.winState === 'Tie';

	const [isEditingState, setIsEditingState] = useState(false);
	const [newNicknameState, setNewNicknameState] = useState(gameState.playerTwo?.nickname);
	const connectionState = useSelector(connectionModeSelector);

	const tryToEditNickname = () => {
		if (
			gameState.gameMode === 'local' ||
			(gameState.gameMode === 'remote' && gameState.playerTwo?.id === gameState.userPlayer.id)
		) {
			setIsEditingState(true);
		}
	};

	const nameSubmit = async () => {
		setIsEditingState(false);
		if (newNicknameState?.length >= 3 && newNicknameState?.length <= 30) {
			if (connectionState === 'polling') {
				const apiFunc = gameState.gameMode === 'local' ? 'renameLocal' : 'renameRemote';
				const newGameState = await networkHandlers.polling[apiFunc]({
					...gameState,
					playerTwo: {
						...gameState.playerTwo,
						nickname: newNicknameState,
					},
				});
				newGameState && setGameState(newGameState);
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
		<PlayerTwoStatsContainer>
			<PlayerTwoNameContainer shouldShowBG={isThisPlayerTurn || isThisPlayerWinner} />
			{isEditingState ? (
				<NameTextBoxContaier onSubmit={nameSubmit}>
					<NicknameInputBox
						onChange={e => setNewNicknameState(e.target.value)}
						onKeyDown={e => inputHandler(e)}
						defaultValue={gameState.playerTwo?.nickname}
					/>
				</NameTextBoxContaier>
			) : (
				<PlayerTwoName onClick={tryToEditNickname}>{gameState?.playerTwo?.nickname}</PlayerTwoName>
			)}
			<PlayerTwoScore>{gameState?.playerTwo?.winCount}</PlayerTwoScore>
			{isThisPlayerWinner && <WinnerLabel player='two' />}
			{isTie && <TieLabel player='one' />}
		</PlayerTwoStatsContainer>
	);
}
