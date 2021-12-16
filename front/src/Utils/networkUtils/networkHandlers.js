import axiosInstance from './axiosInstance';
import { serverBaseUrl, frontBaseUrl, API, pollingPort } from 'envSelector';

const networkHandlers = {
	socket: {},
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
		deleteGames: async () => {
			return axiosInstance.delete(API.deleteGames);
		},

		//general call
		getResume: () => {
			window.open(serverBaseUrl + ':' + pollingPort + API.getResume);
		},

		checkForGameJoining: async setGameState => {
			const url_string = window.location.href;
			const url = new URL(url_string);
			const gameId = url.searchParams.get('game');
			if (gameId) {
				const newGameState = await networkHandlers.polling.getRemote({ gameId });

				if (newGameState === 'noGame') {
					console.log("Error: Online Game either doesn't exist or full.");
				} else if (newGameState?.gameMode === 'remote') {
					setGameState(newGameState);
				}
			}
		},
	},
};

export default networkHandlers;
