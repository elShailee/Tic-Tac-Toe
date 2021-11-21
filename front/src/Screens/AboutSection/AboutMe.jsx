import React from 'react';
import { AboutContainer, ProfileImage, NameContainer, NameUnderline, ParagraphContainer } from './styles';

export default function AboutMe() {
	const addSpace = num => {
		let res = '';
		for (let i = 0; i < num; i++) {
			res += '\u00A0';
		}
		return res;
	};
	return (
		<AboutContainer>
			<NameUnderline />
			<NameContainer />
			<ParagraphContainer>
				{addSpace(29)} I'm a 25 y/o developer from Bet-Shemesh.
				<br />
				{addSpace(27)} I enjoy music and art, and loved being a Youth
				<br />
				{addSpace(22)} Guide (informal education) for five years.
				<br />
				For the last two years I am studying CS at the Open University
				<br />
				of Israel, and learning to program.
				<br />
				Learning alone and with friend was alot of fun, but now I'm
				<br />
				looking forward to work with good people on a great product!
			</ParagraphContainer>
			<ProfileImage />
		</AboutContainer>
	);
}
