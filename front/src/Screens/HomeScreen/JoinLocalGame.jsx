import React from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function JoinLocalGame({ stateObject }) {
	const { setLoadIdState, loadIdState, setGameState } = stateObject;

	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Join a Remote Game</GameCreationSubHeader>

			<div>
				Nickname: <input type='text' placeholder='Nickname' />
			</div>

			<div>
				Game Id: <input type='text' placeholder='Game ID' onChange={e => setLoadIdState(e.target.value)} />
			</div>

			<button
				onClick={async () => {
					let gameInDB = null;
					if (loadIdState) {
						gameInDB = await apiCallsHandler.getGame(loadIdState);
					}
					if (gameInDB?.gameId) {
						setGameState(gameInDB);
						setLoadIdState('');
					} else {
						setLoadIdState(false);
					}
				}}
			>
				Load Game
			</button>
			{loadIdState === false && "  Game ID doesn't exist..."}
		</GameCreationContainer>
	);
}
