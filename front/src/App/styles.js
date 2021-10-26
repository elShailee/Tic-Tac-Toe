import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100vw;
	${({ theme }) => theme.customStyles.centerItems}
	background: url(${({ theme }) => theme.images.appBG});
`;

export const Game = styled.div`
	width: 100%;
	height: 100%;
	max-width: 100vw;
	max-height: 100vw;

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

//	Developement Toolbar
export const DevToolbalContainer = styled.div`
	position: absolute;
	height: 40vh;
	right: ${({ theme }) => theme.calcSizeUnits(1)};
	top: ${({ theme }) => theme.calcSizeUnits(1)};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const DevButton = styled.button`
	width: ${({ theme }) => theme.calcSizeUnits(3)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
`;
