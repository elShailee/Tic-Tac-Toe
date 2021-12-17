import React from 'react';
import { useDispatch } from 'react-redux';
import { switchThemes } from 'Redux/Slices/themeSlice';
import networkHandlers from 'Utils/networkUtils/networkHandlers';
import { DevToolbalContainer, DevButton } from './styles';

export default function DevelopementToolbar({ gameState, setGameState }) {
	const dispatch = useDispatch();

	const getGames = async () => {
		console.log(await networkHandlers.polling.getGames());
	};

	const getWsConnections = async () => {
		console.log(await networkHandlers.polling.getWsConnections());
	};

	return (
		<DevToolbalContainer>
			<DevButton onClick={() => dispatch(switchThemes())}>change theme</DevButton>
			<DevButton onClick={() => console.log(gameState)}>log gameState</DevButton>
			<DevButton onClick={() => setGameState({})}>clear gameState</DevButton>
			<DevButton onClick={getGames}>GET Games</DevButton>
			<DevButton onClick={getWsConnections}>GET wsConnections</DevButton>
			<DevButton
				onClick={async () => {
					console.log(await networkHandlers.polling.deleteGames());

					setGameState({});
				}}
			>
				DELETE Games
			</DevButton>
		</DevToolbalContainer>
	);
}
