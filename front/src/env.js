const gamesAPI = '/Tic-Tac-Toe/api/game/';
const API = {
	resetGame: gamesAPI + 'reset/',

	createLocal: gamesAPI + 'local/create/',
	loadLocal: gamesAPI + 'local/load/',
	moveLocal: gamesAPI + 'local/move/',
	deleteLocal: gamesAPI + 'local/delete/',
	renameLocal: gamesAPI + 'local/rename/',

	createRemote: gamesAPI + 'remote/create/',
	getRemote: gamesAPI + 'remote/get/',
	joinRemote: gamesAPI + 'remote/join/',
	refreshRemote: gamesAPI + 'remote/refresh/',
	moveRemote: gamesAPI + 'remote/move/',
	leaveRemote: gamesAPI + 'remote/leave/',
	renameRemote: gamesAPI + 'remote/rename/',

	getGames: gamesAPI + 'dev/games/',
	deleteGames: gamesAPI + 'dev/games/',

	getResume: '/api/resume',
};

const CONSTS = {
	enviroment: 'production',
	developement: {
		serverBaseUrl: 'http://localhost',
		serverPort: 4000,
		frontBaseUrl: 'http://localhost:3000',
		API,
	},
	production: {
		serverBaseUrl: 'https://shailee-eliyahu.com',
		serverPort: 80,
		frontBaseUrl: 'https://shailee-eliyahu.com',
		API,
	},
};
export default CONSTS;

export const getServerBaseUrl = () => CONSTS[CONSTS.enviroment]?.serverBaseUrl;
export const getApi = () => CONSTS[CONSTS.enviroment]?.API;
