import styled from 'styled-components';

export const ModalBG = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(9.8)};
	width: fit-content;
	margin: auto;
	margin-top: ${({ theme }) => theme.calcSizeUnits(2.8)};
	padding: ${({ theme }) => theme.calcSizeUnits(0.5)} ${({ theme }) => theme.calcSizeUnits(1)};
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.modalsBG};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	display: flex;
	flex-direction: row;
`;

const GeneralCard = styled.div`
	height: 100%;
	width: ${({ theme }) => theme.calcSizeUnits(6.5)};
	box-sizing: border-box;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const SelectLocalModeButton = styled(GeneralCard)`
	background-color: ${({ theme }) => theme.colors.localCardHover};
	&:hover {
		background-color: ${({ theme }) => theme.colors.localCard};
	}
	cursor: pointer;
	margin-right: ${({ theme }) => theme.calcSizeUnits(1)};
`;
export const SelectOnlineModeButton = styled(GeneralCard)`
	background-color: ${({ theme }) => theme.colors.onlineCardHover};
	&:hover {
		background-color: ${({ theme }) => theme.colors.onlineCard};
	}
	cursor: pointer; ;
`;

export const LocalIcon = styled.img`
	height: ${({ theme }) => theme.calcSizeUnits(3)};
	${({ theme }) => theme.customStyles.nonSelectable}
`;

export const OnlineIcon = styled.img`
	height: ${({ theme }) => theme.calcSizeUnits(4)};
	${({ theme }) => theme.customStyles.nonSelectable}
`;

export const ModeSelectionCardHeader = styled.div`
	color: ${({ theme }) => theme.colors.modalsText};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
	font-family: 'Crete Round', serif;
`;
export const ModeSelectionCardText = styled.div`
	color: ${({ theme }) => theme.colors.modalsText};
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
`;

export const LocalGameStartCard = styled(GeneralCard)`
	background-color: ${({ theme }) => theme.colors.localCard};
	${({ theme }) => theme.customStyles.centerItems}
	justify-content: space-between;
`;

export const OnlineGameStartCard = styled(GeneralCard)`
	background-color: ${({ theme }) => theme.colors.onlineCard};
	${({ theme }) => theme.customStyles.centerItems}
	justify-content: space-between;
`;

export const BackButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: start;
`;

export const BackButton = styled.div`
	color: ${({ theme }) => theme.colors.modalsText};
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
	margin-top: ${({ theme }) => theme.calcSizeUnits(0.3)};
	margin-left: ${({ theme }) => theme.calcSizeUnits(0.2)};
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.015)};

	${({ theme }) => theme.customStyles.highlighted}
	cursor: pointer;
`;

export const LeftArrowIcon = styled.img`
	width: ${({ theme }) => theme.calcSizeUnits(0.4)};
	height: ${({ theme }) => theme.calcSizeUnits(0.45)};
`;

export const LocalStartButton = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(3)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	background-color: ${({ theme }) => theme.colors.modalsText};
	color: ${({ theme }) => theme.colors.localCard};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.S};
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.sizes.text.XL};
	font-family: 'Crete Round', serif;
	font-style: italic;
	margin-bottom: ${({ theme }) => theme.calcSizeUnits(1.3)};
	${({ theme }) => theme.customStyles.highlighted}
	cursor: pointer;
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.02)};
	padding-right: ${({ theme }) => theme.calcSizeUnits(0.1)};
	box-sizing: border-box;
`;
LocalStartButton.defaultProps = {
	children: 'Start!',
};

export const LocalStartingMarkSelectionContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
`;

export const LocalMarkImage = styled.img`
	width: ${({ theme, size }) => theme.calcSizeUnits(size)};
	height: ${({ theme, size }) => theme.calcSizeUnits(size)};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.M};
	margin: ${({ theme }) => theme.sizes.padding.XS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadow};
	}
`;

export const LocalRandomMark = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.M};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	width: ${({ theme }) => theme.calcSizeUnits(0.6)};
	margin: ${({ theme }) => theme.sizes.padding.XS};
	margin-right: ${({ theme }) => theme.sizes.padding.XXS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.calcSizeUnits(1.5)};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.modalsText};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadow};
	}
`;
LocalRandomMark.defaultProps = {
	children: '?',
};

export const LocalSelectedMarkImage = styled.img`
	width: ${({ theme, size }) => theme.calcSizeUnits(size)};
	height: ${({ theme, size }) => theme.calcSizeUnits(size)};
	background-color: ${({ theme }) => theme.colors.modalsText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.M};
	margin: ${({ theme }) => theme.sizes.padding.XS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	cursor: pointer;
`;

export const LocalSelectedRandomMark = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.M};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	width: ${({ theme }) => theme.calcSizeUnits(0.6)};
	margin: ${({ theme }) => theme.sizes.padding.XS};
	margin-right: ${({ theme }) => theme.sizes.padding.XXS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
${({ theme }) => theme.customStyles.centerItems}
font-size: ${({ theme }) => theme.calcSizeUnits(1.5)};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.localCard};
	background-color: ${({ theme }) => theme.colors.modalsText};
	cursor: pointer;
`;
LocalSelectedRandomMark.defaultProps = {
	children: '?',
};

export const OnlineStartButton = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(3)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	background-color: ${({ theme }) => theme.colors.modalsText};
	color: ${({ theme }) => theme.colors.onlineCard};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.S};
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.sizes.text.XL};
	font-family: 'Crete Round', serif;
	font-style: italic;
	margin-bottom: ${({ theme }) => theme.calcSizeUnits(1.3)};
	${({ theme }) => theme.customStyles.highlighted}
	cursor: pointer;
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.02)};
	padding-right: ${({ theme }) => theme.calcSizeUnits(0.1)};
	box-sizing: border-box;
`;
OnlineStartButton.defaultProps = {
	children: 'Start!',
};

export const OnlineStartingMarkSelectionContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
	margin-bottom: ${({ theme }) => theme.calcSizeUnits(0.2)};
`;

export const OnlineMarkImage = styled.img`
	width: ${({ theme, size }) => theme.calcSizeUnits(size)};
	height: ${({ theme, size }) => theme.calcSizeUnits(size)};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.S};
	margin: ${({ theme }) => theme.sizes.padding.XXS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadow};
	}
`;

export const OnlineRandomMark = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.XXS};
	height: ${({ theme }) => theme.calcSizeUnits(0.7)};
	width: ${({ theme }) => theme.calcSizeUnits(0.5)};
	margin: ${({ theme }) => theme.sizes.padding.XXS};
	margin-right: ${({ theme }) => theme.sizes.padding.XXS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.calcSizeUnits(0.7)};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.modalsText};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadow};
	}
`;
OnlineRandomMark.defaultProps = {
	children: '?',
};

export const OnlineSelectedMarkImage = styled.img`
	width: ${({ theme, size }) => theme.calcSizeUnits(size)};
	height: ${({ theme, size }) => theme.calcSizeUnits(size)};
	background-color: ${({ theme }) => theme.colors.modalsText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.S};
	margin: ${({ theme }) => theme.sizes.padding.XXS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	cursor: pointer;
`;

export const OnlineSelectedRandomMark = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	padding: ${({ theme }) => theme.sizes.padding.XXS};
	height: ${({ theme }) => theme.calcSizeUnits(0.7)};
	width: ${({ theme }) => theme.calcSizeUnits(0.5)};
	margin: ${({ theme }) => theme.sizes.padding.XXS};
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
${({ theme }) => theme.customStyles.centerItems}
font-size: ${({ theme }) => theme.calcSizeUnits(0.7)};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.onlineCard};
	background-color: ${({ theme }) => theme.colors.modalsText};
	cursor: pointer;
`;
OnlineSelectedRandomMark.defaultProps = {
	children: '?',
};

export const ShowMoreContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
	width:fit-content;
	font-size: ${({ theme }) => theme.calcSizeUnits(0.4)};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.modalsText};
	cursor: pointer;
	margin-bottom: ${({ theme }) => theme.calcSizeUnits(0.2)};
`;

export const OnlineStartingPlayerSelectionContainer = styled.div``;
export const OnlineNicknameInputContainer = styled.div`
	color: ${({ theme }) => theme.colors.modalsText};
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
	margin-bottom: ${({ theme }) => theme.calcSizeUnits(0.3)};
`;

export const NicknameInputBox = styled.input`
	width: ${({ theme }) => theme.calcSizeUnits(3)};
	background-color: ${({ theme }) => theme.colors.modalsText};
	margin-left: ${({ theme }) => theme.calcSizeUnits(0.1)};
	border: 0px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.S};
	font-size: ${({ theme }) => theme.sizes.text.M};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.onlineCard};
	padding: ${({ theme }) => theme.calcSizeUnits(0.1)};
	box-sizing: border-box;
	outline: none;
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.007)};
	&::selection {
		color: ${({ theme }) => theme.colors.modalsText};
		background-color: ${({ theme }) => theme.colors.onlineCardHover};
	}
	&::placeholder {
		color: ${({ theme }) => theme.colors.modalsPlaceholderText};
	}
`;
NicknameInputBox.defaultProps = {
	type: 'text',
	placeholder: 'cool name idk',
	spellCheck: false,
};

export const OnlineInputsContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
	flex-direction:column;
`;
