import { useState } from 'react';
import { AppContainer } from './styles';
import { enviroment } from 'envSelector';
import DevelopemetToolbar from './DemelopementToolbar';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import HomeScreen from 'Screens/HomeScreen/HomeScreen';

function App() {
	const [gameState, setGameState] = useState({});

	return (
		<AppContainer>
			{enviroment === 'developement' && <DevelopemetToolbar gameState={gameState} setGameState={setGameState} />}
			{gameState.gameId ? (
				<GameplayScreen gameState={gameState} setGameState={setGameState} />
			) : (
				<HomeScreen setGameState={setGameState} />
			)}
		</AppContainer>
	);
}

export default App;
