import styled from 'styled-components';

export const GameContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(18, 1fr);
	grid-gap: calc(100% / 60);
	width: 100%;
	height: 100%;
	max-width: 100vw;
	max-height: 100vw;
	grid-row-start: 2;
	grid-row-end: 3;
	grid-column-start: 2;
	grid-column-end: 3;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.bg};
`;

export const TitleContainer = styled.div`
	grid-column: span 12;
	grid-row: span 4;
	color: ${({ theme }) => theme.colors.title};
	${({ theme }) => theme.customStyles.centerItems};
	font-family: 'Dorsa', sans-serif;
	font-size: ${({ theme }) => theme.calcSizeUnits(2.5)};
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.175)};
`;

export const PlayerOneStatsContainer = styled.div`
	grid-column: span 3;
	grid-row: span 9;
	background-color: aquamarine;
`;

export const GameBoardContainer = styled.div`
	grid-column: span 6;
	grid-row: span 9;
	background-color: thistle;
`;

export const PlayerTwoStatsContainer = styled.div`
	grid-column: span 3;
	grid-row: span 9;
	background-color: darkgreen;
`;

export const AboutContainer = styled.div`
	grid-column: span 7;
	grid-row: span 5;
	background-color: blueviolet;
`;

export const SettingsContainer = styled.div`
	grid-column: span 5;
	grid-row: span 5;
	background-color: darkcyan;
`;

// export const TileContainer = styled.div`
// 	width: ${calcSizeUnits(2.5)};
// 	height: ${calcSizeUnits(2.5)};
// 	background-color: lightgreen;
// 	outline: 2px solid green;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	font-size: 4em;
// `;

// export const GridContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `;

// export const GridRowContainer = styled.div`
// 	display: flex;
// `;

// export const DataUtilsContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	margin-left: 10px;
// `;

// //playersScores
// export const PlayerContainer = styled.div`
// 	border: 1px solid black;
// 	width: ${calcSizeUnits(4)};
// 	padding: ${calcSizeUnits(0.5)};
// 	text-align: center;
// `;

// export const PlayersScoresContainer = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	margin-left: ${calcSizeUnits(0.5)};
// `;
