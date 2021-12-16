import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectionModeSelector } from 'Redux/Slices/networkSlice';
import { switchThemes } from 'Redux/Slices/themeSlice';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import { DevToolbalContainer, DevButton } from './styles';

export default function DevelopementToolbar({ gameState, setGameState }) {
	const dispatch = useDispatch();
	const connectionState = useSelector(connectionModeSelector);

	const getGames = async () => {
		if (connectionState === 'polling') {
			console.log(await networkHandlers.polling.getGames());
		}
	};

	return (
		<DevToolbalContainer>
			<DevButton onClick={() => dispatch(switchThemes())}>change theme</DevButton>
			<DevButton onClick={() => console.log(gameState)}>log gameState</DevButton>
			<DevButton onClick={() => setGameState({})}>clear gameState</DevButton>
			<DevButton onClick={getGames}>GET Games</DevButton>
			<DevButton
				onClick={async () => {
					if (connectionState === 'polling') {
						console.log(await networkHandlers.polling.deleteGames());
					}
					setGameState({});
				}}
			>
				DELETE Games
			</DevButton>
		</DevToolbalContainer>
	);
}
