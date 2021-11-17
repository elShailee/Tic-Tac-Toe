import styled from 'styled-components';

export const GameContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(36, 1fr);
	grid-template-rows: repeat(36, 1fr);
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
	padding: calc(100% / 60);
`;

export const TitleContainer = styled.div`
	grid-column: 1 / 37;
	grid-row: 1 / 9;
	color: ${({ theme }) => theme.colors.title};
	${({ theme }) => theme.customStyles.centerItems};
	font-family: 'Dorsa', sans-serif;
	font-size: ${({ theme }) => theme.calcSizeUnits(2.5)};
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.175)};
`;

export const PlayerOneStatsContainer = styled.div`
	grid-column: 1 / 10;
	grid-row: 9 / 27;
`;

export const PlayerOneNameContainer = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(0.6)};
	margin-top: ${({ theme }) => theme.calcSizeUnits(0.6)};
	${({ theme }) => theme.customStyles.centerItems}
	background: linear-gradient(90deg, ${({ theme }) => theme.colors.playerOneBG} 0%, rgba(0, 0, 0, 0) 75%);
	${({ shouldShowBG }) => (shouldShowBG ? '' : 'background: none;')}
`;
export const PlayerOneName = styled.div`
	height: 29%;
	overflow: hidden;
	font-size: ${({ theme }) => theme.sizes.text.XL};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.playerOneText};
	margin-top: ${({ theme }) => theme.calcSizeUnits(-0.7)};
`;

export const PlayerOneScore = styled.div`
	margin-top: ${({ theme }) => theme.calcSizeUnits(-0.5)};
	font-size: ${({ theme }) => theme.sizes.text.XXXL};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.playerOneText};
`;

export const GameBoardContainer = styled.div`
	grid-column: 10 / 28;
	grid-row: 9 / 27;
	display: grid;
	grid-gap: ${({ theme }) => theme.sizes.padding.XS};
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	background-color: ${({ theme }) => theme.colors.gameBoardGrid};
	overflow: hidden;
`;

export const TileContainer = styled.div`
	width: 100%;
	height: 100%;
	grid-row: ${({ row }) => row + 1} / ${({ row }) => row + 2};
	grid-column: ${({ column }) => column + 1} / ${({ column }) => column + 2};
	background-color: ${({ theme }) => theme.colors.bg};
	${({ theme }) => theme.customStyles.centerItems}
`;

export const PlayerTwoStatsContainer = styled.div`
	grid-column: 28 / 37;
	grid-row: 9 / 27;
`;

export const PlayerTwoNameContainer = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(0.6)};
	margin-top: ${({ theme }) => theme.calcSizeUnits(0.6)};
	${({ theme }) => theme.customStyles.centerItems}
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 25%, ${({ theme }) => theme.colors.playerTwoBG} 100%);
	${({ shouldShowBG }) => (shouldShowBG ? '' : 'background: none;')}
`;
export const PlayerTwoName = styled.div`
	height: 29%;
	overflow: hidden;
	font-size: ${({ theme }) => theme.sizes.text.XL};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.playerTwoText};
	margin-top: ${({ theme }) => theme.calcSizeUnits(-0.7)};
`;

export const PlayerTwoScore = styled.div`
	margin-top: ${({ theme }) => theme.calcSizeUnits(-0.5)};
	font-size: ${({ theme }) => theme.sizes.text.XXXL};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.playerTwoText};
`;

export const AboutContainer = styled.div`
	grid-column: 1/21;
	grid-row: 27/37;
	background-color: blueviolet;
`;

export const SettingsContainer = styled.div`
	grid-column: 21/37;
	grid-row: 27/37;
	background-color: darkcyan;
`;

export const WinnerLabel = styled.div`
	font-size: ${({ theme }) => theme.sizes.text.XL};
	font-family: 'Crete Round', serif;
	color: ${({ theme, player }) => {
		if (player === 'one') {
			console.log('object');
			return theme.colors.playerOneText;
		} else if (player === 'two') {
			return theme.colors.playerTwoText;
		} else {
			return null;
		}
	}};
`;
WinnerLabel.defaultProps = {
	children: 'Winner!',
};

export const TieLabel = styled(WinnerLabel)``;
TieLabel.defaultProps = {
	children: 'Tie!',
};

export const RestartButton = styled.img`
	grid-row: 1 / 4;
	grid-column: 1 / 4;
	width: ${({ theme }) => theme.calcSizeUnits(7)};
	height: ${({ theme }) => theme.calcSizeUnits(7)};
	margin: auto;
	margin-left: ${({ theme }) => theme.calcSizeUnits(1.13)};
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
