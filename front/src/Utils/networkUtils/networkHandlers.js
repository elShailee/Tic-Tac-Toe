import axiosInstance from './axiosInstance';
import { wsOperators } from './socketInstance';
import { serverBaseUrl, frontBaseUrl, API, pollingPort } from 'envSelector';

const networkHandlers = {
	socket: {
		//games calls
		resetGame: gameState => {
			wsOperators.send({ action: 'resetGame', data: gameState });
		},

		// local calls
		createLocal: gameState => {
			wsOperators.send({ action: 'createLocal', data: gameState });
		},
		loadLocal: gameState => {
			wsOperators.send({ action: 'loadLocal', data: gameState });
		},
		moveLocal: gameState => {
			wsOperators.send({ action: 'moveLocal', data: gameState });
		},
		deleteLocal: gameState => {
			wsOperators.send({ action: 'deleteLocal', data: gameState });
		},
		renameLocal: gameState => {
			wsOperators.send({ action: 'renameLocal', data: gameState });
		},

		// remote calls
		createRemote: gameState => {
			wsOperators.send({ action: 'createRemote', data: gameState });
		},
		getRemote: gameState => {
			wsOperators.send({ action: 'getRemote', data: gameState });
		},
		joinRemote: gameState => {
			wsOperators.send({ action: 'joinRemote', data: gameState });
		},
		refreshRemote: gameState => {
			wsOperators.send({ action: 'refreshRemote', data: gameState });
		},
		moveRemote: gameState => {
			wsOperators.send({ action: 'moveRemote', data: gameState });
		},
		leaveRemote: gameState => {
			wsOperators.send({ action: 'leaveRemote', data: gameState });
		},
		renameRemote: gameState => {
			wsOperators.send({ action: 'renameRemote', data: gameState });
		},
	},
	polling: {
		//games calls
		resetGame: async gameState => {
			return axiosInstance.post(API.resetGame + gameState.gameId, gameState);
		},

		// local calls
		createLocal: async gameState => {
			return axiosInstance.post(API.createLocal, gameState);
		},
		loadLocal: async gameState => {
			return axiosInstance.get(API.loadLocal + gameState.gameId, gameState);
		},
		moveLocal: async gameState => {
			return axiosInstance.post(API.moveLocal + gameState.gameId, gameState);
		},
		deleteLocal: async gameState => {
			return axiosInstance.delete(API.deleteLocal + gameState.gameId);
		},
		renameLocal: async gameState => {
			return axiosInstance.post(API.renameLocal + gameState.gameId, gameState);
		},

		// remote calls
		createRemote: async gameState => {
			return axiosInstance.post(API.createRemote, gameState);
		},
		getRemote: async gameState => {
			return axiosInstance.get(API.getRemote + gameState.gameId, gameState);
		},
		joinRemote: async gameState => {
			return axiosInstance.post(API.joinRemote + gameState.gameId, gameState);
		},
		refreshRemote: async gameState => {
			return axiosInstance.post(API.refreshRemote + gameState.gameId, gameState);
		},
		moveRemote: async gameState => {
			return axiosInstance.post(API.moveRemote + gameState.gameId, gameState);
		},
		leaveRemote: async gameState => {
			return axiosInstance.post(API.leaveRemote + gameState.gameId, gameState);
		},
		renameRemote: async gameState => {
			return axiosInstance.post(API.renameRemote + gameState.gameId, gameState);
		},
		getInviteLink: gameId => {
			return frontBaseUrl + '/Tic-Tac-Toe/?game=' + gameId;
		},

		// dev calls
		getGames: async () => {
			return axiosInstance.get(API.getGames);
		},
		getWsConnections: async () => {
			return axiosInstance.get(API.getWsConnections);
		},
		deleteGames: async () => {
			return axiosInstance.delete(API.deleteGames);
		},

		//general call
		getResume: () => {
			window.open(serverBaseUrl + ':' + pollingPort + API.getResume);
		},

		tryToJoin: async (gameId, setGameState) => {
			const newGameState = gameId && (await networkHandlers.polling.getRemote({ gameId }));

			if (newGameState === 'noGame') {
				console.log("Error: Online Game either doesn't exist or full.");
			} else if (newGameState?.gameMode === 'remote') {
				setGameState(newGameState);
			}
		},
	},
};

export default networkHandlers;
