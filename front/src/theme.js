import palette from 'palette';
import assetsLib from 'Assets/lib';

const sizeUnit = `min(calc(100vh / 18), calc(100vw / 18))`;
export const calcSizeUnits = num => `calc(${num} * ${sizeUnit})`;

const sharedTheme = {
	calcSizeUnits,
	sizes: {
		border: {
			XL: calcSizeUnits(0.175),
			L: calcSizeUnits(0.1),
			S: calcSizeUnits(0.03),
		},
		borderRadius: {
			Max: '50%',
			XXL: calcSizeUnits(0.5),
			XL: calcSizeUnits(0.35),
			L: calcSizeUnits(0.2),
			M: calcSizeUnits(0.1),
			S: calcSizeUnits(0.05),
		},
		padding: {
			XXL: calcSizeUnits(1),
			XL: calcSizeUnits(0.5),
			L: calcSizeUnits(0.38),
			M: calcSizeUnits(0.25),
			S: calcSizeUnits(0.15),
			XS: calcSizeUnits(0.09),
			XXS: calcSizeUnits(0.04),
		},
		text: {
			XXXL: calcSizeUnits(2),
			XXL: calcSizeUnits(1.25),
			XL: calcSizeUnits(0.7),
			L: calcSizeUnits(0.5),
			M: calcSizeUnits(0.35),
			S: calcSizeUnits(0.3),
			XS: calcSizeUnits(0.27),
			XXS: calcSizeUnits(0.24),
		},
		buttonsHeight: {
			L: calcSizeUnits(1),
			M: calcSizeUnits(0.75),
		},
		icons: {
			XXL: calcSizeUnits(2),
			XL: calcSizeUnits(1.5),
			L: calcSizeUnits(1),
			M: calcSizeUnits(0.75),
			XS: calcSizeUnits(0.35),
		},
	},
	customStyles: {
		centerItems: `	
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
		`,
		highlighted: `
			&:hover {
				filter: brightness(115%) saturate(65%);
			}
		
			&:active {
				filter: brightness(87%) saturate(100%);
			}
		`,
		nonSelectable: `
			user-select: none;
			-webkit-user-drag: none;
		`,
		clickable: `
			cursor: pointer;
		`,
		borderShading: _theme => `
			border: ${_theme.sizes.border.L} solid ${_theme.colors.shadow};
		`,
		noBorderShading: `
			border-color: ${palette.transparent};
		`,
	},
	colors: {
		transparent: palette.transparent,
		shadow: palette.black[103],
	},
	images: { profilePic: assetsLib.profilePic },
};

export const darkTheme = {
	...sharedTheme,
	colors: {
		...sharedTheme.colors,
		bg: palette.blue[110],
		title: palette.yellow[950],
		playerOneText: palette.blue[400],
		playerOneBG: palette.blue[406],
		playerTwoText: palette.orange[450],
		playerTwoBG: palette.orange[456],
		gameBoardGrid: palette.yellow[959],
		modalsBG: palette.yellow[950],
		modalsText: palette.yellow[950],
		modalsPlaceholderText: palette.orange[456],
		localCard: palette.blue[400],
		localCardHover: palette.blue[880],
		onlineCard: palette.orange[450],
		onlineCardHover: palette.orange[750],
		advancedBorder: palette.yellow[959],
		advancedButtonText: palette.blue[110],
		inviteButton: palette.orange[750],
		inviteButtonText: palette.blue[110],
		changeThemesButton: palette.white[900],
		changeThemesButtonBorder: palette.white[600],
		exitButtonBG: palette.yellow[950],
		resumeButton: palette.blue[880],
		githubButton: palette.orange[750],
		aboutNameText: palette.orange[750],
		aboutParagraphText: palette.blue[880],
		connectionToggleButton: palette.white[600],
		logsButton: palette.blue[880],
		logsButtonText: palette.black[100],
		nicknameInputBox: {
			BG: palette.white[903],
			text: palette.blue[110],
			selectedBG: palette.white[903],
			selectedText: palette.white[900],
		},
	},
	images: {
		...sharedTheme.images,
		BG: {
			appBG: assetsLib.darkBG,
		},
		localIcon: assetsLib.darkLocalIcon,
		onlineIcon: assetsLib.darkOnlineIcon,
		backArrow: assetsLib.darkBackArrowIcon,
		colorfulOIcon: assetsLib.darkColorfulOIcon,
		colorlessOIcon: assetsLib.darkColorlessOIcon,
		hintOIcon: assetsLib.darkHintOIcon,
		colorfulXIcon: assetsLib.darkColorfulXIcon,
		colorlessXIcon: assetsLib.darkColorlessXIcon,
		hintXIcon: assetsLib.darkHintXIcon,
		blueXIcon: assetsLib.darkBlueXIcon,
		orangeOIcon: assetsLib.darkOrangeOIcon,
		restartIcon: assetsLib.darkRestartIcon,
		themeIcon: assetsLib.lightThemeIcon,
		exitIcon: assetsLib.darkExitIcon,
		githubIcon: assetsLib.darkGithubIcon,
		CVIcon: assetsLib.darkCVIcon,
	},
};

export const lightTheme = {
	...sharedTheme,
	colors: {
		...sharedTheme.colors,
		bg: palette.white[900],
		title: palette.green[330],
		playerOneText: palette.blue[980],
		playerOneBG: palette.blue[986],
		playerTwoText: palette.orange[900],
		playerTwoBG: palette.orange[906],
		gameBoardGrid: palette.green[339],
		modalsBG: palette.green[330],
		modalsText: palette.white[900],
		modalsPlaceholderText: palette.orange[806],
		localCard: palette.blue[570],
		localCardHover: palette.blue[980],
		onlineCard: palette.orange[800],
		onlineCardHover: palette.orange[900],
		advancedBorder: palette.green[339],
		advancedButtonText: palette.white[900],
		inviteButton: palette.orange[900],
		inviteButtonText: palette.green[330],
		changeThemesButton: palette.blue[110],
		changeThemesButtonBorder: palette.blue[310],
		exitButtonBG: palette.green[330],
		resumeButton: palette.orange[900],
		githubButton: palette.blue[980],
		aboutNameText: palette.orange[800],
		aboutParagraphText: palette.blue[570],
		connectionToggleButton: palette.white[400],
		logsButton: palette.blue[980],
		nicknameInputBox: {
			BG: palette.blue[113],
			text: palette.blue[110],
			selectedBG: palette.blue[113],
			selectedText: palette.white[900],
		},
	},

	images: {
		...sharedTheme.images,
		BG: {
			appBG: assetsLib.lightBG,
		},
		localIcon: assetsLib.lightLocalIcon,
		onlineIcon: assetsLib.lightOnlineIcon,
		backArrow: assetsLib.lightBackArrowIcon,
		colorfulOIcon: assetsLib.lightColorfulOIcon,
		colorlessOIcon: assetsLib.lightColorlessOIcon,
		hintOIcon: assetsLib.lightHintOIcon,
		colorfulXIcon: assetsLib.lightColorfulXIcon,
		colorlessXIcon: assetsLib.lightColorlessXIcon,
		hintXIcon: assetsLib.lightHintXIcon,
		blueXIcon: assetsLib.lightBlueXIcon,
		orangeOIcon: assetsLib.lightOrangeOIcon,
		restartIcon: assetsLib.lightRestartIcon,
		themeIcon: assetsLib.darkThemeIcon,
		exitIcon: assetsLib.lightExitIcon,
		githubIcon: assetsLib.lightGithubIcon,
		CVIcon: assetsLib.lightCVIcon,
	},
};
