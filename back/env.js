const gamesAPI = '/Tic-Tac-Toe/api/game/';
const API = {
	resetGame: gamesAPI + 'reset/',

	createLocal: gamesAPI + 'local/create/',
	loadLocal: gamesAPI + 'local/load/',
	moveLocal: gamesAPI + 'local/move/',
	deleteLocal: gamesAPI + 'local/delete/',
	renameLocal: gamesAPI + 'local/rename/',

	createRemote: gamesAPI + 'remote/create/',
	joinRemote: gamesAPI + 'remote/join/',
	getRemote: gamesAPI + 'remote/get/',
	refreshRemote: gamesAPI + 'remote/refresh/',
	moveRemote: gamesAPI + 'remote/move/',
	leaveRemote: gamesAPI + 'remote/leave/',
	renameRemote: gamesAPI + 'remote/rename/',

	getGames: gamesAPI + 'dev/games/',
	deleteGames: gamesAPI + 'dev/games/',
	getSiteViews: gamesAPI + 'dev/site-views/',
	getResumeViews: gamesAPI + 'dev/resume-views/',

	getResume: '/api/resume',
};

const CONSTS = {
	enviroment: 'production',
	developement: {
		port: 4000,
		API,
	},
	production: {
		port: 4000,
		API,
	},
};
module.exports = CONSTS;
