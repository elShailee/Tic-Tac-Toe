import React, { useState } from 'react';
import { useTheme } from 'styled-components';
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

export default function LocalGameStartModal({ unselectMode }) {
	const theme = useTheme();
	const [selectedMarkState, setSelectedMarkState] = useState('?');

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
						<LocalSelectedMarkImage src={theme.images.colorfulXIcon} alt='' size={1} />
					) : (
						<LocalMarkImage src={theme.images.colorlessXIcon} alt='' size={1} onClick={() => setSelectedMarkState('X')} />
					)}
					{selectedMarkState === '?' ? (
						<LocalSelectedRandomMark />
					) : (
						<LocalRandomMark onClick={() => setSelectedMarkState('?')} />
					)}
					{selectedMarkState === 'O' ? (
						<LocalSelectedMarkImage src={theme.images.orangeOIcon} alt='' size={1.1} />
					) : (
						<LocalMarkImage src={theme.images.colorlessOIcon} alt='' size={1.1} onClick={() => setSelectedMarkState('O')} />
					)}
				</LocalStartingMarkSelectionContainer>
				<LocalStartButton />
			</LocalGameStartCard>
		</ModalBG>
	);
}
