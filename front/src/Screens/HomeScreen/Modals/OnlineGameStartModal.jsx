import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
	OnlineGameStartCard,
	ModalBG,
	BackButton,
	LeftArrowIcon,
	BackButtonContainer,
	OnlineInputsContainer,
	OnlineNicknameInputContainer,
	NicknameInputBox,
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

export default function OnlineGameStartModal({ unselectMode }) {
	const theme = useTheme();
	const [selectedMarkState, setSelectedMarkState] = useState('?');
	const [startingPlayerState, setStartingPlayerState] = useState('?');
	const [showMoreState, setShowMoreState] = useState(false);
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
						<NicknameInputBox />
					</OnlineNicknameInputContainer>
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
									isSelected={startingPlayerState === 'random'}
									onClick={() => setStartingPlayerState('random')}
								>
									?
								</StartingPlayerSelection>
							</OnlineStartingPlayerSelectionContainer>
						</div>
					)}
				</OnlineInputsContainer>
				<OnlineStartButton />
			</OnlineGameStartCard>
		</ModalBG>
	);
}
