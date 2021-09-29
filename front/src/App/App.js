import { useState } from 'react';
import { AppContainer } from './styles';
import { enviroment } from 'envSelector';
import DevelopemetToolbar from './DemelopementToolbar';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import HomeScreen from 'Screens/HomeScreen/HomeScreen';

function App() {
	const blankBoard = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	const [startingPlayerState, setStartingPlayerState] = useState('X');
	const blankGameState = { boardState: blankBoard, turnState: startingPlayerState, winState: false };
	const [gameState, setGameState] = useState(blankGameState);
	const [loadIdState, setLoadIdState] = useState('');

	const stateObject = {
		blankBoard,
		blankGameState,
		startingPlayerState,
		setStartingPlayerState,
		gameState,
		setGameState,
		loadIdState,
		setLoadIdState,
	};

	return (
		<AppContainer>
			{enviroment === 'developement' && <DevelopemetToolbar stateObject={stateObject} />}
			{gameState.gameId ? <GameplayScreen stateObject={stateObject} /> : <HomeScreen stateObject={stateObject} />}
		</AppContainer>
	);
}

export default App;
