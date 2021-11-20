import styled from 'styled-components';

export const AdvancedContainer = styled.div`
	grid-column: 21/37;
	grid-row: 27/37;
	padding: ${({ theme }) => theme.sizes.padding.S};
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-gap: ${({ theme }) => theme.sizes.padding.S};
	border: ${({ theme }) => theme.sizes.border.XL} solid ${({ theme }) => theme.colors.advancedBorder};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	box-sizing: border-box;
`;

const GeneralButton = styled.div`
	padding: ${({ theme }) => theme.sizes.padding.S};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}  
  ${({ theme }) => theme.customStyles.clickable}
	font-size: ${({ theme }) => theme.sizes.text.L};
	font-family: 'Crete Round', serif;
	${({ theme }) => theme.customStyles.borderShading(theme)}
`;

export const InviteButton = styled(GeneralButton)`
	grid-row: span 2;
	grid-column: span 4;
	background-color: ${({ theme }) => theme.colors.inviteButton};
	${({ theme }) => theme.customStyles.highlighted}
`;

export const UsedInviteButton = styled(GeneralButton)`
	grid-row: span 2;
	grid-column: span 4;
	background-color: ${({ theme }) => theme.colors.usedInviteButton};
	font-size: ${({ theme }) => theme.sizes.text.M};
	cursor: default;
`;

export const ChangeThemesButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.changeThemesButton};
	background-image: url(${({ theme }) => theme.images.themeIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: ${({ theme }) => theme.calcSizeUnits(1)};
	border: ${({ theme }) => theme.sizes.padding.S} solid ${({ theme }) => theme.colors.changeThemesButtonBorder};
	grid-row: 1/3;
	grid-column: 7/9;
`;

export const GithubButton = styled.a`
	background-color: ${({ theme }) => theme.colors.githubButton};
	background-image: url(${({ theme }) => theme.images.githubIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: ${({ theme }) => theme.calcSizeUnits(1.75)};
	border: ${({ theme }) => theme.sizes.padding.S} solid ${({ theme }) => theme.colors.githubButtonBorder};
	border-width: ${({ theme }) => theme.sizes.padding.S};
	grid-row: 3 / 6;
	grid-column: 6 / 9;
	${({ theme }) => theme.customStyles.highlighted}
	padding: ${({ theme }) => theme.sizes.padding.S};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
  ${({ theme }) => theme.customStyles.clickable}
`;

export const ExitGameButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.exitButtonBG};
	background-image: url(${({ theme }) => theme.images.exitIcon});
	${({ theme }) => theme.customStyles.highlighted}
	background-repeat: no-repeat;
	background-position: center;
	background-size: ${({ theme }) => theme.calcSizeUnits(0.8)};
	grid-row: 1/3;
	grid-column: 5/7;
`;
