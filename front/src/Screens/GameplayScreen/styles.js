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
	height: 33%;
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
	&:hover {
		background-image: url(${({ shouldHint, hintImage }) => shouldHint && hintImage});
		background-repeat: no-repeat;
		background-position: center;
		background-size: ${({ theme }) => theme.calcSizeUnits(1.8)};
	}
`;

export const TileMark = styled.img`
	width: ${({ theme }) => theme.calcSizeUnits(2)};
	height: ${({ theme }) => theme.calcSizeUnits(2)};
	${({ theme }) => theme.customStyles.nonSelectable}
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
	height: 33%;
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

export const WinnerLabel = styled.div`
	font-size: ${({ theme }) => theme.sizes.text.XL};
	font-family: 'Crete Round', serif;
	color: ${({ theme, player }) => {
		if (player === 'one') {
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
	${({ theme }) => theme.customStyles.nonSelectable}
`;

export const NicknameInputBox = styled.input`
	width: ${({ theme }) => theme.calcSizeUnits(4)};
	background-color: ${({ theme }) => theme.colors.nicknameInputBox.BG};
	margin-left: ${({ theme }) => theme.calcSizeUnits(0.1)};
	border: 0px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.nicknameInputBox.text};
	padding: ${({ theme }) => theme.calcSizeUnits(0.1)};
	padding-left: ${({ theme }) => theme.calcSizeUnits(0.2)};
	box-sizing: border-box;
	outline: none;
	letter-spacing: ${({ theme }) => theme.calcSizeUnits(0.007)};
	&::selection {
		color: ${({ theme }) => theme.colors.nicknameInputBox.selectedText};
		background-color: ${({ theme }) => theme.colors.nicknameInputBox.selectedBG};
	}
	&::placeholder {
		color: ${({ theme }) => theme.colors.modalsPlaceholderText};
	}
`;
NicknameInputBox.defaultProps = {
	type: 'text',
	spellCheck: false,
};

export const NameTextBoxContaier = styled.div`
	height: 33%;
	margin-top: ${({ theme }) => theme.calcSizeUnits(-0.7)};
`;
