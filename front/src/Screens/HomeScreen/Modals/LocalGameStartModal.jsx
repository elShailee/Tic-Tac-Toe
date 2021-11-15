import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
	LocalGameStartCard,
	ModalBG,
	BackButton,
	RightArrowIcon,
	BackButtonContainer,
	LocalStartButton,
	StartingMarkSelectionContainer,
	MarkImage,
	RandomMark,
	SelectedMarkImage,
	SelectedRandomMark,
} from './styles';

export default function LocalGameStartModal({ unselectMode }) {
	const theme = useTheme();
	const [selectedMarkState, setSelectedMarkState] = useState('?');

	return (
		<ModalBG>
			<LocalGameStartCard>
				<BackButtonContainer>
					<BackButton onClick={unselectMode}>
						<RightArrowIcon src={theme.images.backArrow} />
						Back
					</BackButton>
				</BackButtonContainer>
				<StartingMarkSelectionContainer>
					{selectedMarkState === 'X' ? (
						<SelectedMarkImage src={theme.images.blueXIcon} alt='' size={1} />
					) : (
						<MarkImage src={theme.images.colorlessXIcon} alt='' size={1} onClick={() => setSelectedMarkState('X')} />
					)}
					{selectedMarkState === '?' ? <SelectedRandomMark /> : <RandomMark onClick={() => setSelectedMarkState('?')} />}
					{selectedMarkState === 'O' ? (
						<SelectedMarkImage src={theme.images.colorfulOIcon} alt='' size={1.1} />
					) : (
						<MarkImage src={theme.images.colorlessOIcon} alt='' size={1.1} onClick={() => setSelectedMarkState('O')} />
					)}
				</StartingMarkSelectionContainer>
				<LocalStartButton />
			</LocalGameStartCard>
		</ModalBG>
	);
}
