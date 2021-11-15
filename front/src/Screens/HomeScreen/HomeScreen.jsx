import React, { useState } from 'react';
import LocalGameStartModal from './Modals/LocalGameStartModal';
import ModeSelectionModal from './Modals/ModeSelectionModal';
import OnlineGameStartModal from './Modals/OnlineGameStartModal';
// import StartLocalGame from './StartLocalGame';
// import LoadLocalGame from './LoadLocalGame';
// import StartRemoteGame from './StartRemoteGame';
// import JoinRemoteGame from './JoinRemoteGame';
import { HomeScreenContainer } from './styles';

export default function HomeScreen({ setGameState }) {
	const [modeState, setModeState] = useState('select');
	const unselectMode = () => setModeState('select');
	const selectLocal = () => setModeState('local');
	const selectOnline = () => setModeState('online');
	return (
		<HomeScreenContainer>
			{modeState === 'select' && <ModeSelectionModal selectLocal={selectLocal} selectOnline={selectOnline} />}
			{modeState === 'local' && <LocalGameStartModal unselectMode={unselectMode} />}
			{modeState === 'online' && <OnlineGameStartModal unselectMode={unselectMode} />}
			{/* <h1>Tic Tac Toe</h1>
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
			</GameCreationSegment> */}
		</HomeScreenContainer>
	);
}
