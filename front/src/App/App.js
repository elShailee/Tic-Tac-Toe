import { AppContainer, GameContainer, RightShadow, LeftShadow, TopShadow, BotShadow } from './styles';
import Game from 'Screens/GameplayScreen/Game';
import { enviroment } from 'envSelector';
import DevelopemetToolbar from './DevelopementToolbar';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { gameStateSelector, setGameState as gameStateReducer } from 'Redux/Slices/gameSlice';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';

function App() {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme.themeState);
	const gameState = useSelector(gameStateSelector);
	const setGameState = state => dispatch(gameStateReducer(state));
	const connectionState = useSelector(connectionModeSelector);

	if (connectionState === 'polling') {
		if (!gameState?.gameId) networkHandlers.polling.checkForGameJoining(setGameState);
	}

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
