import { useMemo, useState } from 'react';
import { AppContainer, GameContainer, RightShadow, LeftShadow, TopShadow, BotShadow } from './styles';
import Game from 'Screens/GameplayScreen/Game';
import { enviroment } from 'envSelector';
import DevelopemetToolbar from './DevelopementToolbar';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';
import { checkForGameJoining } from 'Utils/axiosFuncs';
import { useSelector } from 'react-redux';

function App() {
	const theme = useSelector(state => state.theme.themeState);
	const [gameState, setGameState] = useState({});

	useMemo(() => {
		checkForGameJoining(setGameState);
	}, []);

	const getCurrentTheme = () => {
		if (theme === 'light') {
			return lightTheme;
		} else if (theme === 'dark') {
			return darkTheme;
		} else {
			console.log('No valid theme state is selected att App.js.');
		}
	};

	return (
		<ThemeProvider theme={getCurrentTheme}>
			<AppContainer>
				<GameContainer>
					<LeftShadow />
					<TopShadow />
					<Game gameState={gameState} setGameState={setGameState} />
					<BotShadow />
					<RightShadow />
				</GameContainer>

				{enviroment === 'developement' && <DevelopemetToolbar gameState={gameState} setGameState={setGameState} />}
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
