const CONSTS = {
	enviroment: 'production',
	developement: {
		serverBaseUrl: 'http://localhost:8888',
		gamesApi: '/api/game/',
	},
	production: {
		serverBaseUrl: 'http://ec2-15-161-107-82.eu-south-1.compute.amazonaws.com:80',
		gamesApi: '/api/game/',
	},
};
export default CONSTS;

export const getServerBaseUrl = () => CONSTS[CONSTS.enviroment]?.serverBaseUrl;
export const getGamesApi = () => CONSTS[CONSTS.enviroment]?.gamesApi;
