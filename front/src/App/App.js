import { useState } from 'react';
import { AppContainer, GameContainer, Game, RightShadow, LeftShadow, TopShadow, BotShadow } from './styles';
import { enviroment } from 'envSelector';
import DevelopemetToolbar from './DevelopementToolbar';
// import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
// import HomeScreen from 'Screens/HomeScreen/HomeScreen';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';

function App() {
	const [themeState, setThemeState] = useState('dark');
	const [gameState, setGameState] = useState({});

	const getCurrentTheme = () => {
		if (themeState === 'light') {
			return lightTheme;
		} else if (themeState === 'dark') {
			return darkTheme;
		} else {
			console.log('No valid theme state is selected att App.js.');
		}
	};

	const changeThemes = () => {
		if (themeState === 'light') {
			setThemeState('dark');
		} else if (themeState === 'dark') {
			setThemeState('light');
		}
	};

	return (
		<ThemeProvider theme={getCurrentTheme}>
			<AppContainer>
				<GameContainer>
					<LeftShadow />
					<TopShadow />
					<Game />
					<BotShadow />
					<RightShadow />
				</GameContainer>

				{enviroment === 'developement' && (
					<DevelopemetToolbar gameState={gameState} setGameState={setGameState} changeThemes={changeThemes} />
				)}
				{/*{gameState.gameId ? (
					<GameplayScreen gameState={gameState} setGameState={setGameState} />
				) : (
					<HomeScreen setGameState={setGameState} />
				)} */}
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
