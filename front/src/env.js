const CONSTS = {
	enviroment: 'production',
	developement: {
		serverBaseUrl: 'http://localhost:8888',
		gamesApi: '/api/game/',
	},
	production: {
		serverBaseUrl: 'ec2-15-161-235-180.eu-south-1.compute.amazonaws.com:8888',
		gamesApi: '/api/game/',
	},
};
export default CONSTS;

export const getServerBaseUrl = () => CONSTS[CONSTS.enviroment]?.serverBaseUrl;
export const getGamesApi = () => CONSTS[CONSTS.enviroment]?.gamesApi;
