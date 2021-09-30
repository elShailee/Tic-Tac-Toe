import styled from 'styled-components';
import { calcSizeUnits } from 'Utils/stylingUtils';

export const HomeScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const GameCreationSegment = styled.div`
	display: flex;
	flex-direction: row;
`;

export const GameCreationContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	line-height: ${calcSizeUnits(1)};
	align-items: center;
`;

export const GameCreationSubHeader = styled.h3`
	margin: ${calcSizeUnits(0.3)};
`;

export const VerticalDivider = styled.div`
	top: 0;
	bottom: 0;
	margin: ${calcSizeUnits(0.15)};
	background-color: #000;
	border: ${calcSizeUnits(0.085)} solid black;
`;