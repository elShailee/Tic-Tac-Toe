import styled from 'styled-components';

export const ScreenContainer = styled.div`
	padding: 10px;
	display: flex;
`;

export const TileStyle = styled.div`
	width: 10vh;
	height: 10vh;
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
