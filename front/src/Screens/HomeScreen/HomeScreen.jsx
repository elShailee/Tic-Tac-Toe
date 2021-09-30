import React from 'react';
import StartLocalGame from './StartLocalGame';
import StartRemoteGame from './StartRemoteGame';
import JoinLocalGame from './JoinLocalGame';
import { HomeScreenContainer, GameCreationSegment, VerticalDivider } from './styles';

export default function HomeScreen({ stateObject }) {
	return (
		<HomeScreenContainer>
			<h1>Tic Tac Toe</h1>
			<GameCreationSegment>
				<StartLocalGame stateObject={stateObject} />
				<VerticalDivider />
				<StartRemoteGame />
				<VerticalDivider />
				<JoinLocalGame stateObject={stateObject} />
			</GameCreationSegment>
		</HomeScreenContainer>
	);
}
