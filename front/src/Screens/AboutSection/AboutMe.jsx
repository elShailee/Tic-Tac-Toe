import React from 'react';
import { AboutContainer, ProfileImage, NameContainer, NameUnderline, ParagraphContainer, TextLine } from './styles';

export default function AboutMe() {
	return (
		<AboutContainer>
			<NameUnderline />
			<NameContainer />
			<ParagraphContainer>
				<TextLine margin={29}> I'm a 25 y/o developer from Bet-Shemesh.</TextLine>
				<TextLine margin={27}> I enjoy music and art, and loved being a Youth</TextLine>
				<TextLine margin={22}> Guide (informal education) for five years.</TextLine>
				<TextLine>For the last two years I am studying CS at the Open University</TextLine>
				<TextLine>of Israel, and learning to program.</TextLine>
				<TextLine>Learning alone and with friend was alot of fun, but now I'm</TextLine>
				<TextLine>looking forward to work with good people on a great product!</TextLine>
			</ParagraphContainer>
			<ProfileImage />
		</AboutContainer>
	);
}
