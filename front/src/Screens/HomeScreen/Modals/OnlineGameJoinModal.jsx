import React from 'react';
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
	OnlineJoinButton,
} from './styles';

export default function OnlineGameJoinModal({ unselectMode }) {
	const theme = useTheme();
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
				</OnlineInputsContainer>
				<OnlineJoinButton />
			</OnlineGameStartCard>
		</ModalBG>
	);
}
