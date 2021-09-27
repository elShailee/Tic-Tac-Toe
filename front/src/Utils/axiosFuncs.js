import Axios from 'axios';
import CONSTS, { getServerBaseUrl, getGamesApi } from 'env';

const axiosInstance = Axios.create({ baseURL: getServerBaseUrl() });

axiosInstance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		logError(error);
	},
);

axiosInstance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		logError(error);
	},
);

const logError = error => {
	if (CONSTS.enviroment === 'developement') {
		console.error(`Error message: ${error.response.data}`);
	}
};

const apiCallsHandler = {
	postGame: async gameState => {
		return axiosInstance.post(getGamesApi(), {
			boardState: gameState.boardState,
			turnState: gameState.turnState,
			winState: gameState.winState,
		});
	},
	putGame: async gameState => {
		return axiosInstance.put(getGamesApi() + gameState.gameId, {
			boardState: gameState.boardState,
			turnState: gameState.turnState,
			winState: gameState.winState,
		});
	},
	getGame: async gameId => {
		if (gameId === '') return { data: null };
		return axiosInstance.get(getGamesApi() + gameId);
	},
	getGames: async () => {
		return axiosInstance.get(getGamesApi());
	},
	deleteGames: async () => {
		return axiosInstance.delete(getGamesApi());
	},
};
export default apiCallsHandler;
