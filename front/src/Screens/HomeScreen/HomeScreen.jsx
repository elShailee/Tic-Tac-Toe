import React from 'react';
import apiCallsHandler from 'Utils/axiosFuncs';

export default function HomeScreen({ stateObject }) {
	const { setGameState, blankGameState, loadIdState, setLoadIdState } = stateObject;
	const createNewGame = async () => {
		setLoadIdState('');
		const newGameState = await apiCallsHandler.postGame(blankGameState);
		newGameState && setGameState(newGameState);
	};

	return (
		<div>
			<h2>Starting screen</h2>
			<button onClick={createNewGame}>new game</button>
			<br />

			<input type='text' onChange={e => setLoadIdState(e.target.value)} />
			<button
				onClick={async () => {
					let gameInDB = null;
					if (loadIdState) {
						gameInDB = await apiCallsHandler.getGame(loadIdState);
					}
					if (gameInDB) {
						setGameState(gameInDB);
						setLoadIdState('');
					} else setLoadIdState(false);
				}}
			>
				Load Game
			</button>
			{loadIdState === false && "  Game ID doesn't exist..."}
		</div>
	);
}
