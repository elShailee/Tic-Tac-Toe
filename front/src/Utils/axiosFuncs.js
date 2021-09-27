import Axios from 'axios';
import { CONSTS } from 'env';

const axios = Axios.create({ baseURL: 'http://localhost:8888' });

export const apiCallsHandler = async ({ action, data }) => {
	try {
		const response = await calls[action](data);
		return response.data;
	} catch (error) {
		if (CONSTS.enviroment === 'developement') {
			logError(error);
		} else {
			console.clear();
		}
		return error;
	}
};

const logError = error => {
	console.error(`Error message: ${error.response.data}`);
};

const calls = {
	postGame: async gameState => {
		return await axios.post('/api/game', {
			boardState: gameState.boardState,
			turnState: gameState.turnState,
			winState: gameState.winState,
		});
	},
	putGame: async gameState => {
		return await axios.put(`/api/game/${gameState.gameId}`, {
			boardState: gameState.boardState,
			turnState: gameState.turnState,
			winState: gameState.winState,
		});
	},
	getGame: async gameId => {
		if (gameId === '') return { data: null };
		return await axios.get(`/api/game/${gameId}`);
	},
	getGames: async () => {
		return await axios.get('/api/game');
	},
	deleteGames: async () => {
		return await axios.delete('api/game');
	},
};
