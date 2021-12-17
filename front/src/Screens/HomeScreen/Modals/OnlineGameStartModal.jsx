import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import { getOppositeMark, randomizeMark } from 'Utils/gameUtils';
import {
	OnlineGameStartCard,
	ModalBG,
	BackButton,
	LeftArrowIcon,
	BackButtonContainer,
	OnlineInputsContainer,
	OnlineNicknameInputContainer,
	NicknameInputBox,
	NicknameLengthAlert,
	OnlineStartButton,
	OnlineStartingMarkSelectionContainer,
	OnlineMarkImage,
	OnlineRandomMark,
	OnlineSelectedMarkImage,
	OnlineSelectedRandomMark,
	ShowMoreContainer,
	OnlineStartingPlayerSelectionContainer,
	StartingPlayerText,
	BigColon,
	StartingPlayerSelection,
} from './styles';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';

export default function OnlineGameStartModal({ unselectMode, setGameState }) {
	const theme = useTheme();
	const [selectedMarkState, setSelectedMarkState] = useState('?');
	const [startingPlayerState, setStartingPlayerState] = useState('?');
	const [nicknameState, setNicknameState] = useState('');
	const [showMoreState, setShowMoreState] = useState(false);
	const connectionState = useSelector(connectionModeSelector);

	const createRemoteGame = async () => {
		if (nicknameState?.length >= 3 && nicknameState?.length <= 30) {
			const userMark = selectedMarkState !== '?' ? selectedMarkState : randomizeMark();
			const actualStartingPlayer = startingPlayerState !== '?' ? startingPlayerState : randomizeStartingPlayer();
			const startingMark = actualStartingPlayer === 'you' ? userMark : getOppositeMark(userMark);

			const messageData = {
				startingPlayer: startingMark,
				gameMode: 'remote',
				userPlayer: { nickname: nicknameState, mark: userMark, winCount: 0 },
			};
			if (connectionState === 'polling') {
				const newGameState = await networkHandlers.polling.createRemote(messageData);
				newGameState && setGameState(newGameState);
			} else if (connectionState === 'socket') {
				networkHandlers.socket.createRemote(messageData);
			}
			unselectMode();
		} else {
			setNicknameState(false);
		}
	};

	const randomizeStartingPlayer = () => {
		const num = Math.random();
		return num < 0.5 ? 'opponent' : 'you';
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
					{nicknameState === false && <NicknameLengthAlert />}
					<ShowMoreContainer onClick={() => setShowMoreState(!showMoreState)}>
						{showMoreState ? '- show less' : '+ show more'}
					</ShowMoreContainer>
					{showMoreState && (
						<div>
							<OnlineStartingMarkSelectionContainer>
								{selectedMarkState === 'X' ? (
									<OnlineSelectedMarkImage src={theme.images.colorfulXIcon} alt='' size={0.5} />
								) : (
									<OnlineMarkImage
										src={theme.images.colorlessXIcon}
										alt=''
										size={0.5}
										onClick={() => setSelectedMarkState('X')}
									/>
								)}
								{selectedMarkState === '?' ? (
									<OnlineSelectedRandomMark />
								) : (
									<OnlineRandomMark onClick={() => setSelectedMarkState('?')} />
								)}
								{selectedMarkState === 'O' ? (
									<OnlineSelectedMarkImage src={theme.images.orangeOIcon} alt='' size={0.55} />
								) : (
									<OnlineMarkImage
										src={theme.images.colorlessOIcon}
										alt=''
										size={0.55}
										onClick={() => setSelectedMarkState('O')}
									/>
								)}
							</OnlineStartingMarkSelectionContainer>
							<OnlineStartingPlayerSelectionContainer>
								<StartingPlayerText />
								<BigColon />
								<StartingPlayerSelection
									isSelected={startingPlayerState === 'you'}
									onClick={() => setStartingPlayerState('you')}
								>
									You
								</StartingPlayerSelection>
								<StartingPlayerSelection
									isSelected={startingPlayerState === 'opponent'}
									onClick={() => setStartingPlayerState('opponent')}
								>
									Opponent
								</StartingPlayerSelection>
								<StartingPlayerSelection
									isSelected={startingPlayerState === '?'}
									onClick={() => setStartingPlayerState('?')}
								>
									?
								</StartingPlayerSelection>
							</OnlineStartingPlayerSelectionContainer>
						</div>
					)}
				</OnlineInputsContainer>
				<OnlineStartButton onClick={createRemoteGame} />
			</OnlineGameStartCard>
		</ModalBG>
	);
}
