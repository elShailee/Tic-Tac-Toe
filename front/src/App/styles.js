import styled from 'styled-components';
import { calcSizeUnits } from 'Utils/stylingUtils';

export const AppContainer = styled.div`
	width: ${calcSizeUnits(32)};
	height: ${calcSizeUnits(18)};
	background-color: #ddd;
	padding: 10px;
	box-sizing: border-box;
`;
