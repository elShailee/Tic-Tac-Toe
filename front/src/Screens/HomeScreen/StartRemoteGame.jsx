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
				Choose Player:
				<input type='radio' id='xPlayerChoose' name='playerChooseRemote' defaultChecked />
				<label htmlFor='xPlayerChoose'>X</label>
				<input type='radio' id='oPlayerChoose' name='playerChooseRemote' />
				<label htmlFor='oPlayerChoose'>O</label>
			</div>

			<div>
				Choose Starting Player:
				<input type='radio' id='xStartsRemote' name='startingPlayerRemote' defaultChecked />
				<label htmlFor='xStartsRemote'>X</label>
				<input type='radio' id='oStartsRemote' name='startingPlayerRemote' />
				<label htmlFor='oStartsRemote'>O</label>
			</div>

			<button>Start Game</button>
		</GameCreationContainer>
	);
}
