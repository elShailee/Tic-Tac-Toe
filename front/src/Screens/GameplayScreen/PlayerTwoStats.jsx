import React from 'react';
import { PlayerTwoStatsContainer, PlayerTwoNameContainer, PlayerTwoName, PlayerTwoScore } from './styles';

export default function PlayerTwoStats() {
	return (
		<PlayerTwoStatsContainer>
			<PlayerTwoNameContainer></PlayerTwoNameContainer>
			<PlayerTwoName>John Blow</PlayerTwoName>
			<PlayerTwoScore>2</PlayerTwoScore>
		</PlayerTwoStatsContainer>
	);
}
