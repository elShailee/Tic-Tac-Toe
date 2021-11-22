import React, { useState } from 'react';
import apiCallsHandler, { getInviteLink } from 'Utils/axiosFuncs';

import {
	AdvancedContainer,
	InviteButton,
	UsedInviteButton,
	ChangeThemesButton,
	ExitGameButton,
	GithubButton,
	ResumeButton,
	// LogsButton,
	// ConnectionToggleButton,
} from './styles';

export default function AdvancedOptions({ gameState, setGameState, changeThemes }) {
	const [didJustCopyLinkState, setDidJustCopyLinkState] = useState(false);

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
		navigator.clipboard.writeText(getInviteLink(gameState.gameId));
		setDidJustCopyLinkState(true);
		setTimeout(() => {
			setDidJustCopyLinkState(false);
		}, 3000);
	};

	return (
		<AdvancedContainer>
			{isInvitingPossible &&
				(didJustCopyLinkState ? (
					<UsedInviteButton onClick={copyLink}>Link Copied to Clipboard!</UsedInviteButton>
				) : (
					<InviteButton onClick={copyLink}>Invite a friend!</InviteButton>
				))}
			{isPlaying && <ExitGameButton title='Exit Game' onClick={() => setGameState({})} />}
			<ChangeThemesButton title='Change Themes' onClick={changeThemes} />
			<GithubButton target='_blank' href='https://github.com/elShailee/Tic-Tac-Toe' />
			<ResumeButton target='_blank' onClick={apiCallsHandler.getResume} title='Check Out My Resume' />
			{/* <LogsButton>Game Logs</LogsButton>
			<ConnectionToggleButton>Switch to WebSocket</ConnectionToggleButton> */}
		</AdvancedContainer>
	);
}
