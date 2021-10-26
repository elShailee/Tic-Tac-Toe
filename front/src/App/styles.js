import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100vw;
	${({ theme }) => theme.customStyles.centerItems}
	background: url(${({ theme }) => theme.images.BG.appBG});
`;

export const Game = styled.div`
	width: 100vw;
	height: 100vh;
	max-width: 100vw;
	max-height: 100vw;
	box-sizing: border-box;

	background-color: azure;
	display: flex;
`;

export const GameContainer = styled.div`
	width: 100vh;
	height: 100vh;
	max-width: 100vw;
	display: flex;
	align-items: center;
`;

export const RightShadow = styled.div`
	background: url(${({ theme }) => theme.images.BG.rightShadow});
	/* background-color: #00f; */
	height: 100vh;
	width: ${({ theme }) => theme.calcSizeUnits(7)};
	overflow: hidden;
	background-repeat: repeat-y;
`;
export const LeftShadow = styled.div`
	background: url(${({ theme }) => theme.images.BG.leftShadow});
	/* background-color: #00f; */
	background-position: right;
	height: 100vh;
	width: ${({ theme }) => theme.calcSizeUnits(7)};
	overflow: hidden;
	background-repeat: repeat-y;
`;

//	Developement Toolbar
export const DevToolbalContainer = styled.div`
	position: absolute;
	height: 40vh;
	right: ${({ theme }) => theme.calcSizeUnits(1)};
	top: ${({ theme }) => theme.calcSizeUnits(1)};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;
`;

export const DevButton = styled.button`
	width: ${({ theme }) => theme.calcSizeUnits(3)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
`;
