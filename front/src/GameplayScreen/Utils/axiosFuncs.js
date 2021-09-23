import Axios from 'axios';

const axios = Axios.create({ baseURL: 'http://localhost:8888' });

export const apiCallsHandler = async ({ action, gameState }) => {
	const response = await calls[action](gameState);
	return response.data;
};

const logError = error => {
	console.error(`Error message: ${error.response.data}`);
};

const calls = {
	postGame: async gameState => {
		try {
			return await axios.post('/api/game', {
				boardState: gameState.boardState,
				turnState: gameState.turnState,
				winState: gameState.winState,
			});
		} catch (error) {
			logError(error);
			return error;
		}
	},
	putGame: async gameState => {
		try {
			return await axios.put(`/api/game/${gameState.gameId}`, {
				boardState: gameState.boardState,
				turnState: gameState.turnState,
				winState: gameState.winState,
			});
		} catch (error) {
			logError(error);
			return error;
		}
	},
	getGames: async () => {
		try {
			return await axios.get('/api/game');
		} catch (error) {
			logError(error);
			return error;
		}
	},
	deleteGames: async () => {
		try {
			return await axios.delete('api/game');
		} catch (error) {
			logError(error);
			return error;
		}
	},
};
