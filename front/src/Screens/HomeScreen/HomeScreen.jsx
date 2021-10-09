import React from 'react';
import StartLocalGame from './StartLocalGame';
import LoadLocalGame from './LoadLocalGame';
import StartRemoteGame from './StartRemoteGame';
import JoinRemoteGame from './JoinRemoteGame';
import { HomeScreenContainer, GameCreationSegment, VerticalDivider, RowsDivider } from './styles';

export default function HomeScreen({ setGameState }) {
	return (
		<HomeScreenContainer>
			<h1>Tic Tac Toe</h1>
			<GameCreationSegment>
				<StartLocalGame setGameState={setGameState} />
				<VerticalDivider />
				<StartRemoteGame setGameState={setGameState} />
			</GameCreationSegment>
			<RowsDivider />
			<GameCreationSegment>
				<LoadLocalGame setGameState={setGameState} />
				<VerticalDivider />
				<JoinRemoteGame setGameState={setGameState} />
			</GameCreationSegment>
		</HomeScreenContainer>
	);
}
