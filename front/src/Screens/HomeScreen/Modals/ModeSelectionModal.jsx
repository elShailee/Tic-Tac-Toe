import React from 'react';
import {
	ModalBG,
	SelectLocalModeButton,
	SelectOnlineModeButton,
	OnlineIcon,
	LocalIcon,
	CardHeader,
	CardText,
} from './styles';
import { useTheme } from 'styled-components';

export default function ModeSelectionModal() {
	const theme = useTheme();
	return (
		<ModalBG>
			<SelectLocalModeButton>
				<CardHeader>Local</CardHeader>
				<LocalIcon src={theme.images.localIcon} alt='' />
				<CardText>(play on this device)</CardText>
			</SelectLocalModeButton>
			<SelectOnlineModeButton>
				<CardHeader>Online</CardHeader>
				<OnlineIcon src={theme.images.onlineIcon} alt='' />
				<CardText>(send link to a friend)</CardText>
			</SelectOnlineModeButton>
		</ModalBG>
	);
}
