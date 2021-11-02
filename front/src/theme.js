import palette from 'palette';
import assetsLib from 'Assets/lib';

const sizeUnit = `min(calc(100vh / 18), calc(100vw / 32))`;
export const calcSizeUnits = num => `calc(${num} * ${sizeUnit})`;

const sharedTheme = {
	calcSizeUnits,
	sizes: {
		border: {
			L: calcSizeUnits(0.1),
			S: calcSizeUnits(0.03),
		},
		borderRadius: {
			Max: '50%',
			XXL: calcSizeUnits(0.5),
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
		},
		text: {
			XXL: calcSizeUnits(1.25),
			XL: calcSizeUnits(0.75),
			L: calcSizeUnits(0.5),
			M: calcSizeUnits(0.35),
			S: calcSizeUnits(0.3),
			XS: calcSizeUnits(0.25),
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
			border: ${_theme.sizes.border.L} solid ${_theme.colors.shading.border};
		`,
		noBorderShading: `
			border-color: ${palette.transparent};
		`,
	},
	colors: {
		transparent: palette.transparent,
		shading: {
			border: palette.black[103],
		},
	},
};

export const darkTheme = {
	...sharedTheme,
	colors: {
		...sharedTheme.colors,
		bg: palette.blue[110],
		title: palette.yellow[950],
	},
	images: {
		BG: {
			appBG: assetsLib.darkBG,
			topShadow: assetsLib.darkTopBGShadow,
			bottomShadow: assetsLib.darkBottomBGShadow,
			rightShadow: assetsLib.darkRightBGShadow,
			leftShadow: assetsLib.darkLeftBGShadow,
		},
	},
};

export const lightTheme = {
	...sharedTheme,
	colors: {
		...sharedTheme.colors,
		bg: palette.white[900],
		title: palette.green[330],
	},

	images: {
		BG: {
			appBG: assetsLib.lightBG,
			topShadow: assetsLib.lightTopBGShadow,
			bottomShadow: assetsLib.lightBottomBGShadow,
			rightShadow: assetsLib.lightRightBGShadow,
			leftShadow: assetsLib.lightLeftBGShadow,
		},
	},
};
