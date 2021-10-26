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
