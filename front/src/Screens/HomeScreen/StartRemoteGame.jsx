import React from 'react';
import { GameCreationContainer, GameCreationSubHeader } from './styles';

export default function StartRemoteGame() {
	return (
		<GameCreationContainer>
			<GameCreationSubHeader>Start a Remote Game</GameCreationSubHeader>

			<div>
				Nickname: <input type='text' placeholder='Nickname' />
			</div>

			<div>
				Choose Your Player:
				<input type='radio' id='xPlayerChoose' name='playerChooseRemote' defaultChecked />
				<label htmlFor='xPlayerChoose'>X</label>
				<input type='radio' id='oPlayerChoose' name='playerChooseRemote' />
				<label htmlFor='oPlayerChoose'>O</label>
			</div>

			<div>
				Choose Starting Player:
				<input type='radio' id='youStartRemote' name='startingPlayerRemote' defaultChecked />
				<label htmlFor='youStartRemote'>You</label>
				<input type='radio' id='opponentStartRemote' name='startingPlayerRemote' />
				<label htmlFor='opponentStartRemote'>Opponent</label>
			</div>

			<button>Start Game</button>
		</GameCreationContainer>
	);
}
