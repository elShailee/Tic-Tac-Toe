import styled from 'styled-components';

export const AboutContainer = styled.div`
	grid-column: 1/21;
	grid-row: 27/37;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	grid-template-rows: repeat(10, 1fr);
	margin-top: ${({ theme }) => theme.calcSizeUnits(-0.07)};
	margin-left: ${({ theme }) => theme.calcSizeUnits(0.2)};
`;

export const ProfileImage = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(2.7)};
	height: ${({ theme }) => theme.calcSizeUnits(2.7)};
	grid-column: 1 / 7;
	grid-row: 1 / 7;
	border-radius: 50%;
	background-image: url(${({ theme }) => theme.images.profilePic});
	background-size: ${({ theme }) => theme.calcSizeUnits(3.5)};
	background-repeat: no-repeat;
	background-position: center;
	background-position: ${({ theme }) => theme.calcSizeUnits(-0.27)} ${({ theme }) => theme.calcSizeUnits(-0.6)};
`;

export const NameContainer = styled.div`
	grid-column: 7 / 21;
	grid-row: 1 / 4;
	font-family: 'Dorsa', sans-serif;
	font-size: ${({ theme }) => theme.calcSizeUnits(1.5)};
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.11)};
	color: ${({ theme }) => theme.colors.aboutNameText};
	-webkit-text-stroke: ${({ theme }) => theme.calcSizeUnits(0.01)} ${({ theme }) => theme.colors.aboutNameText};
`;
NameContainer.defaultProps = {
	children: 'Shailee Eliyahu',
};

export const NameUnderline = styled.div`
	grid-column: 7 / 21;
	grid-row: 4 / 5;
	margin: 0 ${({ theme }) => theme.calcSizeUnits(0.4)};
	height: ${({ theme }) => theme.calcSizeUnits(0.08)};
	background-color: ${({ theme }) => theme.colors.title};
`;

export const ParagraphContainer = styled.div`
	grid-column: 1 / 21;
	grid-row: 4 / 11;
	font-family: sans-serif;
	font-size: ${({ theme }) =>
		navigator.userAgent.indexOf('Chrome') !== -1 ? theme.calcSizeUnits(0.34) : theme.calcSizeUnits(0.3)};
	color: ${({ theme }) => theme.colors.aboutParagraphText};
	text-align: left;
	padding-top: ${({ theme }) => theme.calcSizeUnits(0.3)};
	white-space: nowrap;
`;

export const TextLine = styled.div`
	padding-left: ${({ theme, margin }) => (typeof margin === 'number' ? theme.calcSizeUnits(margin * 0.095) : 'auto')};
`;
