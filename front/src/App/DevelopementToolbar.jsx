import React from 'react';
import { useDispatch } from 'react-redux';
import { switchThemes } from 'Redux/Slices/themeSlice';
import apiCallsHandler from 'Utils/axiosFuncs';
import { DevToolbalContainer, DevButton } from './styles';

export default function DevelopementToolbar({ gameState, setGameState }) {
	const dispatch = useDispatch();

	return (
		<DevToolbalContainer>
			<DevButton onClick={() => dispatch(switchThemes())}>change theme</DevButton>
			<DevButton onClick={() => console.log(gameState)}>log gameState</DevButton>
			<DevButton onClick={() => setGameState({})}>clear gameState</DevButton>
			<DevButton onClick={async () => console.log(await apiCallsHandler.getGames())}>GET Games</DevButton>
			<DevButton
				onClick={async () => {
					console.log(await apiCallsHandler.deleteGames());
					setGameState({});
				}}
			>
				DELETE Games
			</DevButton>
		</DevToolbalContainer>
	);
}
