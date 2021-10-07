import React, { useState } from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function JoinLocalGame({ setGameState }) {
	const [loadIdState, setLoadIdState] = useState('');
	const [nicknameState, setNicknameState] = useState('');

	const joinRemoteGame = async () => {
		if (loadIdState && (nicknameState === '' || nicknameState?.length >= 3)) {
			const newGameState = await apiCallsHandler.joinRemote({
				gameId: loadIdState,
				gameMode: 'remote',
				userPlayer: {
					nickname: nicknameState || 'JoiningPlayer',
				},
			});
			if (newGameState) {
				setGameState(newGameState);
			} else {
				setLoadIdState(false);
			}
		} else if (nicknameState && nicknameState.length < 3) {
			setNicknameState(false);
		}
	};

	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Join a Remote Game</GameCreationSubHeader>

			<div>
				Nickname: <input type='text' placeholder='Nickname' onChange={e => setNicknameState(e.target.value)} />
			</div>
			{nicknameState === false && '  Nickname must be at least 3 characters long'}

			<div>
				Game Id: <input type='text' placeholder='Game ID' onChange={e => setLoadIdState(e.target.value)} />
			</div>

			<button onClick={joinRemoteGame}>Load Game</button>
			{loadIdState === false && "  Game ID doesn't exist..."}
		</GameCreationContainer>
	);
}
