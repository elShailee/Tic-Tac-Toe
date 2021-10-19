import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
`;

export const LeftContainerForOverflow = styled.div`
	direction: rtl;
	overflow: hidden;
	height: 100vh;
`;

export const LeftParticles = styled.img`
	height: 100vh;
	overflow: hidden;
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
	/* background-color: pink; */
	display: flex;
	align-items: center;
`;

export const RightContainerForOverflow = styled.div`
	overflow: hidden;
	height: 100vh;
`;

export const RightParticles = styled.img`
	height: 100vh;
	overflow: hidden;
`;
