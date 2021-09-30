import React, { useState } from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';
import { getOppositeMark } from 'Utils/generalUtils';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function StartRemoteGame({ stateObject }) {
	const { setLoadIdState, blankGameState, setGameState } = stateObject;

	const [playerMark, setPlayerMark] = useState('X');
	const [startingPlayer, setStartingPlayer] = useState('one');
	const [nicknameState, setNicknameState] = useState('');

	const createRemoteGame = async () => {
		setLoadIdState('');
		const startingMark = startingPlayer === 'one' ? playerMark : getOppositeMark(playerMark);
		const newGameState = await apiCallsHandler.postGame({
			...blankGameState,
			turnState: startingMark,
			startingPlayer: startingMark,
			gameMode: 'remote',
			playerOne: { nickname: nicknameState, mark: playerMark },
		});
		newGameState && setGameState(newGameState);
	};

	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Start a Remote Game</GameCreationSubHeader>

			<div>
				Nickname: <input type='text' placeholder='Nickname' onChange={e => setNicknameState(e.target.value)} />
			</div>

			<div>
				Choose Your Player:
				<input
					type='radio'
					id='xPlayerChoose'
					name='playerChooseRemote'
					onChange={() => setPlayerMark('X')}
					defaultChecked
				/>
				<label htmlFor='xPlayerChoose'>X</label>
				<input type='radio' id='oPlayerChoose' name='playerChooseRemote' onChange={() => setPlayerMark('O')} />
				<label htmlFor='oPlayerChoose'>O</label>
			</div>

			<div>
				Choose Starting Player:
				<input
					type='radio'
					id='youStartRemote'
					name='startingPlayerRemote'
					onChange={() => setStartingPlayer('one')}
					defaultChecked
				/>
				<label htmlFor='youStartRemote'>You</label>
				<input type='radio' id='opponentStartRemote' name='startingPlayerRemote' onChange={() => setStartingPlayer('two')} />
				<label htmlFor='opponentStartRemote'>Opponent</label>
			</div>

			<button onClick={createRemoteGame}>Start Game</button>
		</GameCreationContainer>
	);
}
