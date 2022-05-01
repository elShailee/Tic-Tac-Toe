import styled from 'styled-components';

export const AdvancedContainer = styled.div`
	grid-column: 21/37;
	grid-row: 27/37;
	width: 93.75%;
	margin-left: ${({ theme }) => theme.calcSizeUnits(0.21)};
	padding: ${({ theme }) => theme.sizes.padding.S};
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-gap: ${({ theme }) => theme.sizes.padding.S};
	border: ${({ theme }) => theme.sizes.border.XL} solid
		${({ theme }) => theme.colors.advancedBorder};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	box-sizing: border-box;
`;

const GeneralButton = styled.a`
	padding: ${({ theme }) => theme.sizes.padding.S};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}  
  ${({ theme }) => theme.customStyles.clickable}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
	color: ${({ theme }) => theme.colors.advancedButtonText};
	${({ theme }) => theme.customStyles.borderShading(theme)}
	border-width:${({ theme }) => theme.sizes.border.L};
	background-repeat: no-repeat;
	background-position: center;
`;

export const InviteButton = styled(GeneralButton)`
	grid-row: span 2;
	grid-column: span 4;
	background-color: ${({ theme }) => theme.colors.inviteButton};
	${({ theme }) => theme.customStyles.highlighted}
	color: ${({ theme }) => theme.colors.inviteButtonText};
`;

export const UsedInviteButton = styled.input`
	outline: none;
	padding: ${({ theme }) => theme.sizes.padding.S};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	${({ theme }) => theme.customStyles.centerItems}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
	${({ theme }) => theme.customStyles.borderShading(theme)}
	border-width:${({ theme }) => theme.sizes.border.L};
	grid-row: span 2;
	grid-column: span 4;
	background-color: ${({ theme }) => theme.colors.inviteButton};
	font-size: ${({ theme }) => theme.calcSizeUnits(0.4)};
	color: ${({ theme }) => theme.colors.inviteButtonText};
`;
UsedInviteButton.defaultProps = {
	type: 'text',
	readOnly: true,
	autoFocus: true,
};

export const ChangeThemesButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.changeThemesButton};
	background-image: url(${({ theme }) => theme.images.themeIcon});
	background-size: ${({ theme }) => theme.calcSizeUnits(1)};
	border: ${({ theme }) => theme.sizes.border.L} solid
		${({ theme }) => theme.colors.changeThemesButtonBorder};
	grid-row: 1/3;
	grid-column: 7/9;
	${({ theme }) => theme.customStyles.highlighted}
`;

export const GithubButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.githubButton};
	background-image: url(${({ theme }) => theme.images.githubIcon});
	background-size: ${({ theme }) => theme.calcSizeUnits(1.1)};
	grid-row: 3 / 5;
	grid-column: 4 / 6;
	${({ theme }) => theme.customStyles.highlighted}
`;

export const ExitGameButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.exitButtonBG};
	background-image: url(${({ theme }) => theme.images.exitIcon});
	${({ theme }) => theme.customStyles.highlighted}
	background-size: ${({ theme }) => theme.calcSizeUnits(0.8)};
	grid-row: 1/3;
	grid-column: 5/7;
`;

export const ResumeButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.resumeButton};
	background-image: url(${({ theme }) => theme.images.CVIcon});
	background-size: ${({ theme }) => theme.calcSizeUnits(1.75)};
	grid-row: 3 / 6;
	grid-column: 6 / 9;
	${({ theme }) => theme.customStyles.highlighted}
`;
