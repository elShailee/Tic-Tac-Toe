// import { useState } from 'react';
import { AppContainer, Game, GameContainer } from './styles';
// import { enviroment } from 'envSelector';
// import DevelopemetToolbar from './DemelopementToolbar';
// import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
// import HomeScreen from 'Screens/HomeScreen/HomeScreen';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';

function App() {
	// const [gameState, setGameState] = useState({});

	return (
		<ThemeProvider theme={lightTheme}>
			<AppContainer>
				<GameContainer>
					<Game></Game>
				</GameContainer>

				{/* {enviroment === 'developement' && <DevelopemetToolbar gameState={gameState} setGameState={setGameState} />}
				{gameState.gameId ? (
					<GameplayScreen gameState={gameState} setGameState={setGameState} />
				) : (
					<HomeScreen setGameState={setGameState} />
				)} */}
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
