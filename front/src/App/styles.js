import styled from 'styled-components';

export const AppContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems};
	width: 100vw;
	height: 100vh;
	background: url(${({ theme }) => theme.images.BG.appBG});
	overflow: hidden;
	${({ theme }) => theme.customStyles.centerItems}
`;

const gameSize = 'min(100vh, 100vw)';
const shadowsWidth = `calc(calc(100vw - ${gameSize}) / 2)`;
const shafowsHeight = `calc(calc(100vh - ${gameSize}) / 2)`;

export const GameContainer = styled.div`
	display: grid;
	grid-template-columns: ${shadowsWidth} ${gameSize} ${shadowsWidth};
	grid-auto-rows: ${shafowsHeight} ${gameSize} ${shafowsHeight};
	${({ theme }) => theme.customStyles.nonSelectable}
`;

export const Game = styled.div`
	width: 100%;
	height: 100%;
	max-width: 100vw;
	max-height: 100vw;
	grid-row-start: 2;
	grid-row-end: 3;
	grid-column-start: 2;
	grid-column-end: 3;
	box-sizing: border-box;

	background-color: crimson;
	display: flex;
`;

export const RightShadow = styled.div`
	width: min(50%, 40vh);
	/* width: 50%; */
	grid-row: 2 / 3;
	grid-column: 3 / 4;
	/* background: url(${({ theme }) => theme.images.BG.rightShadow}); */
	background-repeat: repeat-y;
	background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, ${({ theme }) => theme.colors.bg} 100%);
`;
export const LeftShadow = styled.div`
	width: min(50%, 40vh);
	/* width: 50%; */
	grid-row: 2 / 3;
	grid-column: 1 / 2;
	/* background: url(${({ theme }) => theme.images.BG.leftShadow}); */
	background-position: right;
	justify-self: right;
	background-repeat: repeat-y;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${({ theme }) => theme.colors.bg} 100%);
`;
export const TopShadow = styled.div`
	height: min(50%, 40vw);
	/* height: 50%; */
	grid-row: 1 / 2;
	grid-column: 2 / 3;
	/* background: url(${({ theme }) => theme.images.BG.topShadow}); */
	align-self: flex-end;
	background-position: bottom;
	background-repeat: repeat-x;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${({ theme }) => theme.colors.bg} 100%);
`;
export const BotShadow = styled.div`
	height: min(50%, 40vw);
	/* height: 50%; */
	grid-row: 3 / 4;
	grid-column: 2 / 3;
	/* background: url(${({ theme }) => theme.images.BG.bottomShadow}); */
	align-self: flex-start;
	background-repeat: repeat-x;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, ${({ theme }) => theme.colors.bg} 100%);
`;

//	Developement Toolbar
export const DevToolbalContainer = styled.div`
	grid-row: 2 / 3;
	grid-column: 3 / 4;
	height: 40vh;
	position: absolute;
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
