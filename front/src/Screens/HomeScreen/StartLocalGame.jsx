import React, { useState } from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function StartLocalGame({ stateObject }) {
	const { setLoadIdState, blankGameState, setGameState } = stateObject;
	const [assumedStartingPlayer, setAssumedStartingPlayer] = useState('X');

	const createLocalGame = async () => {
		setLoadIdState('');
		const newGameState = await apiCallsHandler.postGame({
			...blankGameState,
			turnState: assumedStartingPlayer,
			startingPlayer: assumedStartingPlayer,
			gameMode: 'local',
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
