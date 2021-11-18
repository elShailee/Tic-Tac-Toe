import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import apiCallsHandler from 'Utils/axiosFuncs';
import {
	OnlineGameStartCard,
	ModalBG,
	BackButton,
	LeftArrowIcon,
	BackButtonContainer,
	OnlineInputsContainer,
	OnlineNicknameInputContainer,
	NicknameInputBox,
	OnlineJoinButton,
} from './styles';

export default function OnlineGameJoinModal({ unselectMode, gameState, setGameState }) {
	const theme = useTheme();
	const [nicknameState, setNicknameState] = useState('');

	const joinRemoteGame = async () => {
		if (nicknameState === '' || nicknameState?.length >= 3) {
			const newGameState = await apiCallsHandler.joinRemote({
				gameId: gameState.gameId,
				gameMode: 'remote',
				userPlayer: {
					nickname: nicknameState || 'JoiningPlayer',
					winCount: 0,
				},
			});
			if (newGameState) {
				setGameState(newGameState);
			}
		} else if (nicknameState && nicknameState.length < 3) {
			setNicknameState(false);
		}
	};

	return (
		<ModalBG>
			<OnlineGameStartCard>
				<BackButtonContainer>
					<BackButton onClick={unselectMode}>
						<LeftArrowIcon src={theme.images.backArrow} />
						Back
					</BackButton>
				</BackButtonContainer>
				<OnlineInputsContainer>
					<OnlineNicknameInputContainer>
						Nickname
						<NicknameInputBox onChange={e => setNicknameState(e.target.value)} />
					</OnlineNicknameInputContainer>
				</OnlineInputsContainer>
				<OnlineJoinButton onClick={joinRemoteGame} />
			</OnlineGameStartCard>
		</ModalBG>
	);
}
