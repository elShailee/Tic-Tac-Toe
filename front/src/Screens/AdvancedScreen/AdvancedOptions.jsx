import React, { useState } from 'react';
import { getInviteLink } from 'Utils/axiosFuncs';
import { AdvancedContainer, InviteButton, UsedInviteButton, ChangeThemesButton, ExitGameButton } from './styles';

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
			{isPlaying && <ExitGameButton onClick={() => setGameState({})} />}
			<ChangeThemesButton onClick={changeThemes} />
		</AdvancedContainer>
	);
}
