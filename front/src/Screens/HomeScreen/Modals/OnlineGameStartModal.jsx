import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
	OnlineGameStartCard,
	ModalBG,
	BackButton,
	LeftArrowIcon,
	BackButtonContainer,
	OnlineStartButton,
	OnlineStartingMarkSelectionContainer,
	OnlineMarkImage,
	OnlineRandomMark,
	OnlineSelectedMarkImage,
	OnlineSelectedRandomMark,
} from './styles';

export default function OnlineGameStartModal({ unselectMode }) {
	const theme = useTheme();
	const [selectedMarkState, setSelectedMarkState] = useState('?');
	return (
		<ModalBG>
			<OnlineGameStartCard>
				<BackButtonContainer>
					<BackButton onClick={unselectMode}>
						<LeftArrowIcon src={theme.images.backArrow} />
						Back
					</BackButton>
				</BackButtonContainer>
				<OnlineStartingMarkSelectionContainer>
					{selectedMarkState === 'X' ? (
						<OnlineSelectedMarkImage src={theme.images.blueXIcon} alt='' size={1} />
					) : (
						<OnlineMarkImage src={theme.images.colorlessXIcon} alt='' size={1} onClick={() => setSelectedMarkState('X')} />
					)}
					{selectedMarkState === '?' ? (
						<OnlineSelectedRandomMark />
					) : (
						<OnlineRandomMark onClick={() => setSelectedMarkState('?')} />
					)}
					{selectedMarkState === 'O' ? (
						<OnlineSelectedMarkImage src={theme.images.colorfulOIcon} alt='' size={1.1} />
					) : (
						<OnlineMarkImage src={theme.images.colorlessOIcon} alt='' size={1.1} onClick={() => setSelectedMarkState('O')} />
					)}
				</OnlineStartingMarkSelectionContainer>
				<OnlineStartButton />
			</OnlineGameStartCard>
		</ModalBG>
	);
}
