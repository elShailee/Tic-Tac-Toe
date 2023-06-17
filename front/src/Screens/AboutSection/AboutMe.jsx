import React from 'react';
import { AboutContainer, ProfileImage, NameContainer, NameUnderline, ParagraphContainer, TextLine } from './styles';

export default function AboutMe() {
	return (
		<AboutContainer>
			<NameUnderline />
			<NameContainer />
			<ParagraphContainer>
				<TextLine margin={30}> I'm a 27 y/o developer from Bet-Shemesh.</TextLine>
				<TextLine margin={28}> For the past year I've been working as a</TextLine>
				<TextLine margin={24}> Full Stack developer in Siemens.</TextLine>
				<TextLine>I have learned alot from my experience, and currently looking</TextLine>
				<TextLine>for a new position, to allow myself to learn and offer more.</TextLine>
				{/* <TextLine>Learning alone and with friends was alot of fun, but now I'm</TextLine>
				<TextLine>looking forward to work with good people on a great product!</TextLine> */}
			</ParagraphContainer>
			<ProfileImage />
		</AboutContainer>
	);
}
