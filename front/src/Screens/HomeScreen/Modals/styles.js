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
	background-color: ${({ theme }) => theme.colors.localCard};
	&:hover {
		background-color: ${({ theme }) => theme.colors.localCardHover};
	}
	margin-right: ${({ theme }) => theme.calcSizeUnits(1)};
`;
export const SelectOnlineModeButton = styled(GeneralCard)`
	background-color: ${({ theme }) => theme.colors.onlineCard};
	&:hover {
		background-color: ${({ theme }) => theme.colors.onlineCardHover};
	}
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

	${({ theme }) => theme.customStyles.highlighted}
	cursor: pointer;
`;

export const RightArrowIcon = styled.img`
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
`;
LocalStartButton.defaultProps = {
	children: 'Start!',
};
