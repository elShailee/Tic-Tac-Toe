import React, { useState } from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function StartLocalGame({ setGameState }) {
	const [assumedStartingPlayer, setAssumedStartingPlayer] = useState('X');

	const createLocalGame = async () => {
		const newGameState = await apiCallsHandler.createLocal({
			startingPlayer: assumedStartingPlayer,
			gameMode: 'local',
			playerOne: { nickname: 'Player1', winCount: 0 },
			playerTwo: { nickname: 'Player2', winCount: 0 },
		});
		newGameState && setGameState(newGameState);
	};

	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Start a Local Game</GameCreationSubHeader>
			<div>
				Choose Starting Player:
				<input
					type='radio'
					id='xStartsLocal'
					name='startingPlayerLocal'
					onChange={() => setAssumedStartingPlayer('X')}
					defaultChecked
				/>
				<label htmlFor='xStartsLocal'>X</label>
				<input type='radio' id='oStartsLocal' name='startingPlayerLocal' onChange={() => setAssumedStartingPlayer('O')} />
				<label htmlFor='oStartsLocal'>O</label>
			</div>
			<button onClick={createLocalGame}>Start Game</button>
		</GameCreationContainer>
	);
}
