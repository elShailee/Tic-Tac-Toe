import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';
import { useTheme } from 'styled-components';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
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
	NicknameLengthAlert,
} from './styles';

export default function OnlineGameJoinModal({ unselectMode, gameState, setGameState }) {
	const theme = useTheme();
	const [nicknameState, setNicknameState] = useState('');
	const connectionState = useSelector(connectionModeSelector);

	const joinRemoteGame = async () => {
		if (nicknameState?.length >= 3 && nicknameState?.length <= 30) {
			const messageData = {
				gameId: gameState.gameId,
				gameMode: 'remote',
				userPlayer: {
					nickname: nicknameState || 'JoiningPlayer',
					winCount: 0,
				},
			};
			if (connectionState === 'polling') {
				const newGameState = await networkHandlers.polling.joinRemote(messageData);
				if (newGameState) {
					setGameState(newGameState);
					unselectMode();
				}
			} else if (connectionState === 'socket') {
				networkHandlers.socket.joinRemote(messageData);
			}
		} else {
			setNicknameState(false);
		}
	};

	return (
		<ModalBG>
			<OnlineGameStartCard>
				<BackButtonContainer>
					<BackButton
						onClick={() => {
							unselectMode();
							setGameState({});
						}}
					>
						<LeftArrowIcon src={theme.images.backArrow} />
						Back
					</BackButton>
				</BackButtonContainer>
				<OnlineInputsContainer>
					<OnlineNicknameInputContainer>
						Nickname
						<NicknameInputBox onChange={e => setNicknameState(e.target.value)} />
					</OnlineNicknameInputContainer>
					{nicknameState === false && <NicknameLengthAlert />}
				</OnlineInputsContainer>
				<OnlineJoinButton onClick={joinRemoteGame} />
			</OnlineGameStartCard>
		</ModalBG>
	);
}
