import React from 'react';
import { useTheme } from 'styled-components';
import { LocalGameStartCard, ModalBG, BackButton, RightArrowIcon, BackButtonContainer, LocalStartButton } from './styles';

export default function LocalGameStartModal() {
	const theme = useTheme();
	return (
		<ModalBG>
			<LocalGameStartCard>
				<BackButtonContainer>
					<BackButton>
						<RightArrowIcon src={theme.images.backArrow} />
						Back
					</BackButton>
				</BackButtonContainer>
				<LocalStartButton />
			</LocalGameStartCard>
		</ModalBG>
	);
}
