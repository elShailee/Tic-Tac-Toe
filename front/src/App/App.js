// import { useState } from 'react';
import { AppContainer, Left, Game, Right, GameContainer } from './styles';
// import { enviroment } from 'envSelector';
// import DevelopemetToolbar from './DemelopementToolbar';
// import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
// import HomeScreen from 'Screens/HomeScreen/HomeScreen';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

function App() {
	// const [gameState, setGameState] = useState({});

	return (
		<ThemeProvider theme={theme}>
			<AppContainer>
				<Left></Left>
				<GameContainer>
					<Game></Game>
				</GameContainer>
				<Right></Right>
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
