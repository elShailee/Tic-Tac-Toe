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
	${({ theme }) => theme.customStyles.centerItems}
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
