import Axios from 'axios';
import { enviroment, gamesApi, serverPort, serverBaseUrl, frontBaseUrl } from 'envSelector';

const axiosInstance = Axios.create({ baseURL: serverBaseUrl + ':' + serverPort });

axiosInstance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		console.log(error);
	},
);

axiosInstance.interceptors.response.use(
	function (response) {
		if (response.status === 202) {
			logErrorMessage(response);
			return null;
		}
		return response.data;
	},
	function (error) {
		logErrorMessage(error.response);
	},
);

const logErrorMessage = response => {
	if (enviroment === 'developement') {
		console.error(`Error message: ${response.data}`);
	}
};

const apiCallsHandler = {
	//games calls
	resetGame: async gameState => {
		return axiosInstance.post(gamesApi.resetGame + gameState.gameId, gameState);
	},

	// local calls
	createLocal: async gameState => {
		return axiosInstance.post(gamesApi.createLocal, gameState);
	},
	loadLocal: async gameState => {
		return axiosInstance.get(gamesApi.loadLocal + gameState.gameId, gameState);
	},
	moveLocal: async gameState => {
		return axiosInstance.post(gamesApi.moveLocal + gameState.gameId, gameState);
	},
	deleteLocal: async gameState => {
		return axiosInstance.delete(gamesApi.deleteLocal + gameState.gameId);
	},
	renameLocal: async gameState => {
		return axiosInstance.post(gamesApi.renameLocal + gameState.gameId, gameState);
	},

	// remote calls
	createRemote: async gameState => {
		return axiosInstance.post(gamesApi.createRemote, gameState);
	},
	getRemote: async gameState => {
		return axiosInstance.get(gamesApi.getRemote + gameState.gameId, gameState);
	},
	joinRemote: async gameState => {
		return axiosInstance.post(gamesApi.joinRemote + gameState.gameId, gameState);
	},
	refreshRemote: async gameState => {
		return axiosInstance.post(gamesApi.refreshRemote + gameState.gameId, gameState);
	},
	moveRemote: async gameState => {
		return axiosInstance.post(gamesApi.moveRemote + gameState.gameId, gameState);
	},
	leaveRemote: async gameState => {
		return axiosInstance.post(gamesApi.leaveRemote + gameState.gameId, gameState);
	},
	renameRemote: async gameState => {
		return axiosInstance.post(gamesApi.renameRemote + gameState.gameId, gameState);
	},

	// dev calls
	getGames: async () => {
		return axiosInstance.get(gamesApi.getGames);
	},
	deleteGames: async () => {
		return axiosInstance.delete(gamesApi.deleteGames);
	},
};
export default apiCallsHandler;

export const checkForGameJoining = async setGameState => {
	const url_string = window.location.href;
	const url = new URL(url_string);
	const gameId = url.searchParams.get('game');
	if (gameId) {
		const newGameState = await apiCallsHandler.getRemote({ gameId });

		if (newGameState === 'noGame') {
			setGameState({ errorMessage: "Online Game either doesn't exist or full." });
		} else if (newGameState?.gameMode === 'remote') {
			setGameState(newGameState);
		}
	}
};

export const getInviteLink = gameId => {
	return frontBaseUrl + '/?game=' + gameId;
};
