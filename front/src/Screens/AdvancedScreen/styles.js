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
	${({ theme }) => theme.customStyles.highlighted}
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
`;

export const UsedInviteButton = styled(GeneralButton)`
	grid-row: span 2;
	grid-column: span 4;
	background-color: ${({ theme }) => theme.colors.usedInviteButton};
	font-size: ${({ theme }) => theme.sizes.text.M};
`;
