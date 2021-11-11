import styled from 'styled-components';

export const ModalBG = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(8.63)};
	width: 100%;
	margin-top: ${({ theme }) => theme.calcSizeUnits(3.9)};
	padding: 20px 30px;
	box-sizing: border-box;
	background-color: lightblue;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	display: flex;
	flex-direction: row;
`;

const GeneralCard = styled.div`
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	${({ theme }) => theme.customStyles.centerItems}
`;

export const SelectLocalModeButton = styled(GeneralCard)`
	background-color: #f00;
	margin-right: 30px;
`;
export const SelectOnlineModeButton = styled(GeneralCard)`
	background-color: #0ff;
`;
