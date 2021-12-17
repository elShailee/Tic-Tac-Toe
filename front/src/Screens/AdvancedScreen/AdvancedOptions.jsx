import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchConnectionMode, connectionModeSelector } from 'Redux/Slices/networkSlice';
import { switchThemes } from 'Redux/Slices/themeSlice';
import networkHandlers from 'Utils/networkUtils/networkHandlers';

import {
	AdvancedContainer,
	InviteButton,
	UsedInviteButton,
	ChangeThemesButton,
	ExitGameButton,
	GithubButton,
	ResumeButton,
	LogsButton,
	ConnectionToggleButton,
} from './styles';

export default function AdvancedOptions({ gameState, setGameState }) {
	const dispatch = useDispatch();
	const [didJustCopyLinkState, setDidJustCopyLinkState] = useState(false);
	const connectionState = useSelector(connectionModeSelector);

	let numOfPlayers = 0;
	if (gameState.playerOne) {
		numOfPlayers++;
	}
	if (gameState.playerTwo) {
		numOfPlayers++;
	}
	const isInvitingPossible = gameState?.gameMode === 'remote' && numOfPlayers === 1 && gameState?.userPlayer;
	const isPlaying = gameState.gameMode === 'local' || (gameState.gameMode === 'remote' && gameState.userPlayer);

	const copyLink = async () => {
		setDidJustCopyLinkState(true);
		setTimeout(() => {
			setDidJustCopyLinkState(false);
		}, 10000);
	};

	const exitGame = async () => {
		const apiAction = gameState.gameMode === 'local' ? 'deleteLocal' : 'leaveRemote';
		if (connectionState === 'polling') {
			const newGameState = await networkHandlers.polling[apiAction](gameState);
			newGameState && setGameState(newGameState);
		} else if (connectionState === 'socket') {
			networkHandlers.socket[apiAction](gameState);
		}
	};

	return (
		<AdvancedContainer>
			{isInvitingPossible &&
				(didJustCopyLinkState ? (
					<UsedInviteButton
						onFocus={e => e.target.setSelectionRange(0, e.target.value.length)}
						defaultValue={networkHandlers.polling.getInviteLink(gameState.gameId)}
					/>
				) : (
					<InviteButton onClick={copyLink}>Invite a friend!</InviteButton>
				))}
			{isPlaying && <ExitGameButton title='Exit Game' onClick={exitGame} />}
			<ChangeThemesButton title='Change Themes' onClick={() => dispatch(switchThemes())} />
			<GithubButton target='_blank' href='https://github.com/elShailee/Tic-Tac-Toe' />
			<ResumeButton
				target='_blank'
				onClick={() => {
					networkHandlers.polling.getResume();
				}}
				title='Check Out My Resume'
			/>
			<LogsButton>Game Logs (Coming Soon)</LogsButton>
			<ConnectionToggleButton onClick={() => dispatch(switchConnectionMode())}>
				Connect via {connectionState === 'polling' ? 'WebSocket' : 'Polling'}!
			</ConnectionToggleButton>
		</AdvancedContainer>
	);
}
