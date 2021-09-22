import Axios from 'axios';

const axios = Axios.create({ baseURL: 'http://localhost:8888' });

export const apiCallsHandler = async ({ action, gameData }) => console.log(await calls[action](gameData));

const calls = {
	getGames: async () => {
		try {
			return await axios.get('/api/game');
		} catch (error) {
			return error;
		}
	},
	postGame: async gameData => {
		try {
			return await axios.post('/api/game', { boardState: gameData.boardState, turnState: gameData.turnState });
		} catch (error) {
			return error;
		}
	},
	deleteGames: async () => {
		try {
			return await axios.delete('api/game');
		} catch (error) {
			return error;
		}
	},
};
