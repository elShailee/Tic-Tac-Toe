import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import apiCallsHandler from 'Utils/axiosFuncs';
import { randomizeMark } from 'Utils/gameUtils';
import {
	LocalGameStartCard,
	ModalBG,
	BackButton,
	LeftArrowIcon,
	BackButtonContainer,
	LocalStartButton,
	LocalStartingMarkSelectionContainer,
	LocalMarkImage,
	LocalRandomMark,
	LocalSelectedMarkImage,
	LocalSelectedRandomMark,
} from './styles';

export default function LocalGameStartModal({ unselectMode, setGameState }) {
	const theme = useTheme();
	const [selectedMarkState, setSelectedMarkState] = useState('?');

	const createLocalGame = async () => {
		const startingPlayer = selectedMarkState !== '?' ? selectedMarkState : randomizeMark();
		const newGameState = await apiCallsHandler.createLocal({
			startingPlayer,
			gameMode: 'local',
			playerOne: { nickname: 'Player1', winCount: 0, mark: 'O' },
			playerTwo: { nickname: 'Player2', winCount: 0, mark: 'X' },
		});
		newGameState && setGameState(newGameState);
	};

	return (
		<ModalBG>
			<LocalGameStartCard>
				<BackButtonContainer>
					<BackButton onClick={unselectMode}>
						<LeftArrowIcon src={theme.images.backArrow} />
						Back
					</BackButton>
				</BackButtonContainer>
				<LocalStartingMarkSelectionContainer>
					{selectedMarkState === 'X' ? (
						<LocalSelectedMarkImage src={theme.images.blueXIcon} alt='' size={1} />
					) : (
						<LocalMarkImage src={theme.images.colorlessXIcon} alt='' size={1} onClick={() => setSelectedMarkState('X')} />
					)}
					{selectedMarkState === '?' ? (
						<LocalSelectedRandomMark />
					) : (
						<LocalRandomMark onClick={() => setSelectedMarkState('?')} />
					)}
					{selectedMarkState === 'O' ? (
						<LocalSelectedMarkImage src={theme.images.colorfulOIcon} alt='' size={1.1} />
					) : (
						<LocalMarkImage src={theme.images.colorlessOIcon} alt='' size={1.1} onClick={() => setSelectedMarkState('O')} />
					)}
				</LocalStartingMarkSelectionContainer>
				<LocalStartButton onClick={createLocalGame} />
			</LocalGameStartCard>
		</ModalBG>
	);
}
