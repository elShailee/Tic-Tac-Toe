// import { useState } from 'react';
import {
	AppContainer,
	LeftContainerForOverflow,
	LeftParticles,
	Game,
	RightContainerForOverflow,
	RightParticles,
	GameContainer,
} from './styles';
// import { enviroment } from 'envSelector';
// import DevelopemetToolbar from './DemelopementToolbar';
// import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
// import HomeScreen from 'Screens/HomeScreen/HomeScreen';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import leftSvg from 'Assets/left.svg';
import rightSvg from 'Assets/right.svg';

function App() {
	// const [gameState, setGameState] = useState({});

	return (
		<ThemeProvider theme={theme}>
			<AppContainer>
				<LeftContainerForOverflow>
					<LeftParticles src={leftSvg} />
				</LeftContainerForOverflow>
				<GameContainer>
					<Game></Game>
				</GameContainer>
				<RightContainerForOverflow>
					<RightParticles src={rightSvg} />
				</RightContainerForOverflow>

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
