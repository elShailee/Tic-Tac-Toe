import styled from 'styled-components';
import { calcSizeUnits } from 'theme';

export const GameContainer = styled.div`
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

export const TileContainer = styled.div`
	width: ${calcSizeUnits(2.5)};
	height: ${calcSizeUnits(2.5)};
	background-color: lightgreen;
	outline: 2px solid green;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 4em;
`;

export const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GridRowContainer = styled.div`
	display: flex;
`;

export const DataUtilsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

//playersScores
export const PlayerContainer = styled.div`
	border: 1px solid black;
	width: ${calcSizeUnits(4)};
	padding: ${calcSizeUnits(0.5)};
	text-align: center;
`;

export const PlayersScoresContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: ${calcSizeUnits(0.5)};
`;
