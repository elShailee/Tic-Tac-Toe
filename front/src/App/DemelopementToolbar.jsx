import React from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';

export default function DemelopementToolbar({ gameState, setGameState }) {
	return (
		<div>
			<button onClick={() => console.log(gameState)}>log gameState</button>
			<button onClick={async () => console.log(await apiCallsHandler.getGames())}>GET Games</button>
			<button
				onClick={async () => {
					console.log(await apiCallsHandler.deleteGames());
					setGameState({});
				}}
			>
				DELETE Games
			</button>
			<hr />
		</div>
	);
}
