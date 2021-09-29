import React from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function StartLocalGame({ stateObject }) {
	const { setLoadIdState, blankGameState, setGameState } = stateObject;

	const createNewGame = async () => {
		setLoadIdState('');
		const newGameState = await apiCallsHandler.postGame(blankGameState);
		newGameState && setGameState(newGameState);
	};

	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Start a Local Game</GameCreationSubHeader>
			<div>
				Choose Starting Player:
				<input type='radio' id='xStartsLocal' name='startingPlayerLocal' defaultChecked />
				<label htmlFor='xStartsLocal'>X</label>
				<input type='radio' id='oStartsLocal' name='startingPlayerLocal' />
				<label htmlFor='oStartsLocal'>O</label>
			</div>
			<button onClick={createNewGame}>Start Game</button>
		</GameCreationContainer>
	);
}
