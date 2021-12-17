const { games, wsConnections } = require('../data');
const { getOppositeMark } = require('./utilFuncs');
const createUuid = require('./uuidGenerator');
const moment = require('moment');

const makePlayerLeave = ({ player, gameId }) => {
	if (!player) return null;
	games[gameId].boardState = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	games[gameId].winState = false;

	if (!games[gameId].playerTwo?.id || !games[gameId].playerOne?.id) {
		delete games[gameId];
		return {};
	} else if (games[gameId]?.playerOne?.id === player.id && !games[gameId].playerTwo) {
		delete games[gameId];
		return {};
	} else if (games[gameId]?.playerTwo?.id === player.id && !games[gameId].playerOne) {
		delete games[gameId];
		return {};
	} else if (games[gameId]?.playerOne?.id === player.id && games[gameId].playerTwo) {
		delete games[gameId].playerOne;
		games[gameId].playerTwo.winCount = 0;
		games[gameId].turnState = games[gameId].playerTwo.mark;
		games[gameId].startingPlayer = games[gameId].playerTwo.mark;
		return games[gameId];
	} else if (games[gameId]?.playerOne && games[gameId].playerTwo.id === player.id) {
		delete games[gameId].playerTwo;
		games[gameId].playerOne.winCount = 0;
		games[gameId].turnState = games[gameId].playerOne.mark;
		games[gameId].startingPlayer = games[gameId].playerOne.mark;
		return games[gameId];
	}
};

module.exports.makePlayerLeave = makePlayerLeave;

const apiActions = {
	resetGame: gameState => {
		const { gameId } = gameState;
		games[gameId].boardState = [
			[false, false, false],
			[false, false, false],
			[false, false, false],
		];
		if (games[gameId].winState) {
			games[gameId].startingPlayer = getOppositeMark(games[gameId].startingPlayer);
		}
		games[gameId].turnState = games[gameId].startingPlayer;
		games[gameId].winState = false;

		if (games[gameId].gameMode === 'local') {
			return games[gameId];
		} else {
			const { userPlayer } = gameState;
			return { ...games[gameId], userPlayer };
		}
	},

	//local actions
	createLocal: gameState => {
		const gameId = createUuid(10);
		const { startingPlayer, gameMode, playerOne, playerTwo } = gameState;
		games[gameId] = {
			gameId,
			boardState: [
				[false, false, false],
				[false, false, false],
				[false, false, false],
			],
			startingPlayer,
			turnState: startingPlayer,
			winState: false,
			gameMode,
			playerOne,
			playerTwo,
		};
		return games[gameId];
	},

	moveLocal: gameState => {
		const { gameId, boardState, winState } = gameState;

		if (winState === games[gameId].playerOne.mark) {
			games[gameId].playerOne.winCount++;
		}
		if (winState === games[gameId].playerTwo.mark) {
			games[gameId].playerTwo.winCount++;
		}

		games[gameId] = {
			...games[gameId],
			boardState,
			turnState: getOppositeMark(games[gameId].turnState),
			winState,
		};
		return games[gameId];
	},

	renameLocal: gameState => {
		const { gameId, playerOne, playerTwo } = gameState;
		games[gameId] = { ...games[gameId], playerOne, playerTwo };
		return games[gameId];
	},

	deleteLocal: gameState => {
		delete games[gameState.gameId];
		if (wsConnections[gameState.gameId]) {
			delete wsConnections[gameState.gameId];
		}
		return {};
	},

	//remote actions
	createRemote: gameState => {
		const gameId = createUuid(10);
		const { startingPlayer, gameMode, userPlayer } = gameState;
		const playerId = createUuid(10);

		userPlayer.id = playerId;
		games[gameId] = {
			gameId,
			boardState: [
				[false, false, false],
				[false, false, false],
				[false, false, false],
			],
			startingPlayer,
			turnState: startingPlayer,
			winState: false,
			gameMode,
		};
		if (userPlayer.mark === 'O') {
			games[gameId].playerOne = userPlayer;
		} else {
			games[gameId].playerTwo = userPlayer;
		}
		return { ...games[gameId], userPlayer };
	},

	getRemote: gameState => {
		const { gameId } = gameState;
		const targetGame = games[gameId];
		let numOfPlayers = 0;
		if (games[gameId]?.playerOne) {
			numOfPlayers++;
		}
		if (games[gameId]?.playerTwo) {
			numOfPlayers++;
		}

		if (targetGame?.gameMode !== 'remote' || numOfPlayers !== 1) {
			return 'noGame';
		} else {
			return games[gameId];
		}
	},

	joinRemote: gameState => {
		const { gameId, userPlayer } = gameState;
		const freeSlot = games[gameId].playerOne ? 'playerTwo' : 'playerOne';
		const occupiedSlot = freeSlot === 'playerOne' ? 'playerTwo' : 'playerOne';
		if (!games[gameId][freeSlot]) {
			userPlayer.mark = getOppositeMark(games[gameId][occupiedSlot].mark);
			userPlayer.id = createUuid(10);
			games[gameId][freeSlot] = userPlayer;
			return { status: 200, data: { ...games[gameId], userPlayer } };
		} else {
			return { status: 202, data: 'Target game is full, try againg later.' };
		}
	},

	refreshRemote: gameState => {
		const { gameId, userPlayer } = gameState;

		userPlayer.lastCheckIn = moment();
		if (games[gameId].playerOne?.id === userPlayer.id) {
			games[gameId].playerOne = userPlayer;
			if (
				games[gameId].playerTwo?.lastCheckIn &&
				moment(moment().diff(games[gameId].playerTwo?.lastCheckIn)).seconds() > 2
			) {
				makePlayerLeave({ player: games[gameId].playerTwo, gameId });
			}
		}
		if (games[gameId].playerTwo?.id === userPlayer.id) {
			games[gameId].playerTwo = userPlayer;
			if (games[gameId].playerOne?.lastCheckIn && moment(moment().diff(games[gameId].playerOne.lastCheckIn)).seconds() > 2) {
				makePlayerLeave({ player: games[gameId].playerOne, gameId });
			}
		}

		return { ...games[gameId], userPlayer };
	},

	moveRemote: gameState => {
		const { gameId, boardState, winState, userPlayer } = gameState;
		const { turnState, playerOne, playerTwo } = games[gameId];

		if (winState === userPlayer.mark) {
			userPlayer.winCount++;
			if (games[gameId].playerOne?.id === userPlayer.id) {
				games[gameId].playerOne = userPlayer;
			}
			if (games[gameId].playerTwo?.id === userPlayer.id) {
				games[gameId].playerTwo = userPlayer;
			}
		}

		if (userPlayer.mark === turnState && playerOne && playerTwo) {
			games[gameId] = { ...games[gameId], boardState, turnState: getOppositeMark(turnState), winState };
			return {
				status: 200,
				data: {
					...games[gameId],
					userPlayer,
				},
			};
		} else if (userPlayer.mark !== turnState) {
			return { status: 202, data: 'cannot move out of turn.' };
		} else {
			return { status: 202, data: 'game must contain both players in order to play.' };
		}
	},

	leaveRemote: gameState => {
		const { gameId, userPlayer } = gameState;
		return makePlayerLeave({ player: userPlayer, gameId });
	},

	renameRemote: gameState => {
		const { gameId, playerOne, playerTwo, userPlayer } = gameState;

		if (userPlayer.id === games[gameId].playerOne?.id) {
			games[gameId].playerOne.nickname = playerOne.nickname;
			userPlayer.nickname = playerOne.nickname;
			return { ...games[gameId], userPlayer };
		} else if (userPlayer.id === games[gameId].playerTwo?.id) {
			games[gameId].playerTwo.nickname = playerTwo.nickname;
			userPlayer.nickname = playerTwo.nickname;
			return { ...games[gameId], userPlayer };
		}
	},

	//dev actions
	deleteGames: () => {
		Object.keys(games).forEach(key => {
			delete games[key];
		});
		return games;
	},
};

module.exports.apiActions = apiActions;
