import React, { useState } from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function LoadLocalGame({ setGameState }) {
	const [loadIdState, setLoadIdState] = useState('');

	const loadLocalGame = async () => {
		if (loadIdState) {
			const newGameState = await apiCallsHandler.loadLocal({
				gameId: loadIdState,
				gameMode: 'local',
			});
			if (newGameState) {
				setGameState(newGameState);
			} else {
				setLoadIdState(false);
			}
		}
	};

	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Load a Local Game</GameCreationSubHeader>
			<div>
				Game ID:
				<input type='text' onChange={e => setLoadIdState(e.target.value)} placeholder='Game ID' />
				{loadIdState === false && "  Game ID doesn't exist..."}
			</div>
			<button onClick={loadLocalGame}>Load Game</button>
		</GameCreationContainer>
	);
}
