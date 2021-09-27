const CONSTS = {
	enviroment: 'developement2',
	developement: {
		serverBaseUrl: 'http://localhost:8888',
		gamesApi: '/api/game/',
	},
};
export default CONSTS;

export const getServerBaseUrl = () => CONSTS[CONSTS.enviroment]?.serverBaseUrl;
export const getGamesApi = () => CONSTS[CONSTS.enviroment]?.gamesApi;
