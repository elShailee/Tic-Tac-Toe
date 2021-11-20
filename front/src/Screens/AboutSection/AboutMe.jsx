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
				{addSpace(28)} Lorem ipsum dolor sit amet,
				<br />
				{addSpace(25)} Lorem ipsum dolor sit amet,
				<br />
				{addSpace(20)}
				Lorem ipsum dolor sit amet,
				<br /> Lorem ipsum dolor sit amet,
				<br /> Lorem ipsum dolor sit amet,
			</ParagraphContainer>
			<ProfileImage />
		</AboutContainer>
	);
}
