import React, { useState } from 'react';
import LocalGameStartModal from './Modals/LocalGameStartModal';
import ModeSelectionModal from './Modals/ModeSelectionModal';
import OnlineGameJoinModal from './Modals/OnlineGameJoinModal';
import OnlineGameStartModal from './Modals/OnlineGameStartModal';
import { HomeScreenContainer } from './styles';

export default function HomeScreen({ gameState, setGameState, isJoining }) {
	const [modeState, setModeState] = useState('select');
	const unselectMode = () => {
		setModeState('select');
		setGameState({});
	};
	const selectLocal = () => setModeState('local');
	const selectOnline = () => setModeState('online');

	if (!gameState?.gameId)
		return (
			<HomeScreenContainer>
				{modeState === 'select' && <ModeSelectionModal selectLocal={selectLocal} selectOnline={selectOnline} />}
				{modeState === 'local' && <LocalGameStartModal unselectMode={unselectMode} setGameState={setGameState} />}
				{modeState === 'online' && <OnlineGameStartModal unselectMode={unselectMode} setGameState={setGameState} />}
			</HomeScreenContainer>
		);
	else if (isJoining) {
		return (
			<HomeScreenContainer>
				<OnlineGameJoinModal unselectMode={unselectMode} />
			</HomeScreenContainer>
		);
	} else return null;
}
