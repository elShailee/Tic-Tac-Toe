import React from 'react';
import {
	ModalBG,
	SelectLocalModeButton,
	SelectOnlineModeButton,
	OnlineIcon,
	LocalIcon,
	ModeSelectionCardHeader,
	ModeSelectionCardText,
} from './styles';
import { useTheme } from 'styled-components';

export default function ModeSelectionModal() {
	const theme = useTheme();
	return (
		<ModalBG>
			<SelectLocalModeButton>
				<ModeSelectionCardHeader>Local</ModeSelectionCardHeader>
				<LocalIcon src={theme.images.localIcon} alt='' />
				<ModeSelectionCardText>(play on this device)</ModeSelectionCardText>
			</SelectLocalModeButton>
			<SelectOnlineModeButton>
				<ModeSelectionCardHeader>Online</ModeSelectionCardHeader>
				<OnlineIcon src={theme.images.onlineIcon} alt='' />
				<ModeSelectionCardText>(send link to a friend)</ModeSelectionCardText>
			</SelectOnlineModeButton>
		</ModalBG>
	);
}
