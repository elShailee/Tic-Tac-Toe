import Axios from 'axios';
import { enviroment, gamesApi, serverPort, serverBaseUrl } from 'envSelector';

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
	postGame: async gameState => {
		return axiosInstance.post(gamesApi, {
			boardState: gameState.boardState,
			turnState: gameState.turnState,
			winState: gameState.winState,
		});
	},
	putGame: async gameState => {
		return axiosInstance.put(gamesApi + '/' + gameState.gameId, {
			boardState: gameState.boardState,
			turnState: gameState.turnState,
			winState: gameState.winState,
		});
	},
	getGame: async gameId => {
		if (gameId === '') return { data: null };
		return axiosInstance.get(gamesApi + '/' + gameId);
	},
	getGames: async () => {
		return axiosInstance.get(gamesApi);
	},
	deleteGames: async () => {
		return axiosInstance.delete(gamesApi);
	},
};
export default apiCallsHandler;
