import styled from 'styled-components';

export const ModalBG = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(9.8)};
	width: 90%;
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
	width: 100%;
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
`;

export const OnlineIcon = styled.img`
	height: ${({ theme }) => theme.calcSizeUnits(4)};
`;

export const CardHeader = styled.div`
	color: ${({ theme }) => theme.colors.modalsText};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
	font-family: 'Crete Round', serif;
`;
export const CardText = styled.div`
	color: ${({ theme }) => theme.colors.modalsText};
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
`;
