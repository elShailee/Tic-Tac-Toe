import React from 'react';
import { PlayerOneStatsContainer, PlayerOneNameContainer, PlayerOneName, PlayerOneScore } from './styles';

export default function PlayerOneStats() {
	return (
		<PlayerOneStatsContainer>
			<PlayerOneNameContainer></PlayerOneNameContainer>
			<PlayerOneName>King Shailee</PlayerOneName>
			<PlayerOneScore>7</PlayerOneScore>
		</PlayerOneStatsContainer>
	);
}
