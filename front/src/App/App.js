import { useMemo, useState } from 'react';
import {
	AppContainer,
	GameContainer,
	RightShadow,
	LeftShadow,
	TopShadow,
	BotShadow,
} from './styles';
import Game from 'Screens/GameplayScreen/Game';
import { enviroment } from 'envSelector';
import DevelopemetToolbar from './DevelopementToolbar';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';
import { checkForGameJoining } from 'Utils/axiosFuncs';

function App() {
	const [themeState, setThemeState] = useState('light');
	const [gameState, setGameState] = useState({});

	useMemo(() => {
		checkForGameJoining(setGameState);
	}, []);

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
					<Game gameState={gameState} setGameState={setGameState} changeThemes={changeThemes} />
					<BotShadow />
					<RightShadow />
				</GameContainer>

				{enviroment === 'developement' && (
					<DevelopemetToolbar
						gameState={gameState}
						setGameState={setGameState}
						changeThemes={changeThemes}
					/>
				)}
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
