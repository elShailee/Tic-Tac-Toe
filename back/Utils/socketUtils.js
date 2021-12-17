const { wsConnections, games } = require('../data');
const { apiActions } = require('./gameActions');

// const getGameIdFromSocket = ws => {
// 	for (const gameId in wsConnections) {
// 		if (ws in wsConnections[gameId]) {
// 			return gameId;
// 		}
// 	}
// 	return null;
// };

// const addConnectionToGame = (ws, gameId) => {
// 	const wsName = Date.now().toString();
// 	wsConnections[gameId] = { ...wsConnections[gameId], [wsName]: ws };
// };

// const removeUserFromGame = (ws, gameId) => {
// 	const gameState = games[gameId];
// 	if (gameState.gameMode === 'remote') {
// 		gameState.playerOne.id === ws.playerId && apiActions.leaveRemote({ ...gameState, userPlayer: gameState.playerOne });
// 		gameState.playerTwo.id === ws.playerId && apiActions.leaveRemote({ ...gameState, userPlayer: gameState.playerTwo });
// 	} else if (gameState.gameMode === 'local') {
// 		delete games[gameId];
// 	}
// };

// const removeConnectionFromGame = (ws, gameId) => {
// 	for (const socketName in wsConnections[gameId]) {
// 		if (wsConnections[gameId][socketName] === ws) {
// 			delete wsConnections[gameId][socketName];
// 			if (Object.keys(wsConnections[gameId]).length === 0) {
// 				delete wsConnections[gameId];
// 			}
// 		}
// 	}
// };

// const updateOpponentIfNeeded = (gameState, ws) => {
// 	if (gameState.gameMode === 'local') return;
// 	for (const socketName in wsConnections[gameState.gameId]) {
// 		const connection = wsConnections[gameState.gameId][socketName];
// 		if (connection !== ws) {
// 			connection.send(JSON.stringify(getOpponentGameState(gameState)));
// 		}
// 	}
// };

const getOpponentGameState = gameState => {
	if (gameState.gameMode === 'local') return;
	if (gameState?.playerOne?.id === gameState.userPlayer.id) {
		return { ...gameState, userPlayer: gameState.playerTwo };
	}
	if (gameState?.playerTwo?.id === gameState.userPlayer.id) {
		return { ...gameState, userPlayer: gameState.playerOne };
	}
};

const socketConnectionHandler = ws => {
	console.log('connection made');

	ws.gameState = {};

	ws.terminationListener = setInterval(() => {
		socketTerminationHandler(ws);
	}, 1000);
};

const socketTerminationHandler = ws => {
	if (ws._readyState > 1) {
		clearInterval(ws.terminationListener);
		ws.close();
	}
	const { gameState } = ws;
	if (!gameState.gameId || gameState?.gameMode === 'local') {
		return;
	}

	const gameConnections = wsConnections[gameState.gameId];
	for (const playerId in gameConnections) {
		if (playerId !== gameState?.userPlayer?.id) {
			if (gameConnections[playerId]._readyState > 1) {
				delete gameConnections[playerId];
				const opponentRole = gameState.userPlayer && gameState.playerOne.id === playerId ? 'playerOne' : 'playerTwo';
				const newGameState = apiActions.leaveRemote({ ...gameState, userPlayer: gameState[opponentRole] });
				const remainingPlayer = newGameState?.playerOne ? newGameState?.playerOne : newGameState?.playerTwo;
				ws.send(JSON.stringify({ ...newGameState, userPlayer: remainingPlayer }));
			}
		}
	}
};

const socketCloseHandler = ws => {
	console.log('connection closed');

	clearInterval(ws.terminationListener);
};

const socketMessageHandler = (ws, message) => {
	message = JSON.parse(message.toString());

	if (message.action === 'sync') {
		ws.gameState = message.data;
		return;
	}

	let gameActionResult = apiActions[message.action](message.data);
	if (gameActionResult?.status === 202) {
		ws.send(JSON.stringify(gameActionResult));
		return;
	} else if (gameActionResult?.status) {
		gameActionResult = gameActionResult.data;
	}

	ws.send(JSON.stringify(gameActionResult));

	if (gameActionResult.gameMode === 'remote' || ws.gameState.gameMode === 'remote') {
		const { action } = message;
		let shouldUpdateOpponent = true;

		//update wsConnections
		if (action === 'createRemote') {
			shouldUpdateOpponent = false;
			wsConnections[gameActionResult.gameId] = { [gameActionResult.userPlayer.id]: ws };
		} else if (action === 'joinRemote') {
			wsConnections[gameActionResult.gameId][gameActionResult.userPlayer.id] = ws;
		} else if (action === 'leaveRemote') {
			delete wsConnections[ws.gameState.gameId][ws.gameState.userPlayer.id];
		}

		//update opponent
		if (shouldUpdateOpponent) {
			let gameState = gameActionResult?.userPlayer?.id ? gameActionResult : ws.gameState;
			if (message.action === 'leaveRemote' && games[gameState.gameId]) {
				gameState = apiActions.resetGame(gameState);
			}

			for (const playerId in wsConnections[gameState.gameId]) {
				if (playerId !== gameState.userPlayer.id) {
					const otherWs = wsConnections[gameState.gameId][playerId];
					if (playerId === gameState?.playerOne?.id) {
						const newGameState = { ...gameState, userPlayer: gameState.playerOne };
						otherWs.gameState = newGameState;
						otherWs.send(JSON.stringify(newGameState));
					}
					if (playerId === gameState?.playerTwo?.id) {
						const newGameState = { ...gameState, userPlayer: gameState.playerTwo };
						otherWs.gameState = newGameState;
						otherWs.send(JSON.stringify(newGameState));
					}
				}
			}
		}

		//update ws.gameState
		ws.gameState = gameActionResult;
	}
};

module.exports = { socketConnectionHandler, socketCloseHandler, socketMessageHandler };
