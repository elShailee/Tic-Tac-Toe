import React from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';

export default function DemelopementToolbar({ stateObject }) {
	const { gameState, setGameState, blankGameState } = stateObject;
	return (
		<div>
			<button onClick={() => console.log(gameState)}>log gameState</button>
			<button onClick={async () => console.log(await apiCallsHandler.getGames())}>GET Games</button>
			<button
				onClick={async () => {
					console.log(await apiCallsHandler.deleteGames());
					setGameState(blankGameState);
				}}
			>
				DELETE Games
			</button>
			<hr />
		</div>
	);
}
