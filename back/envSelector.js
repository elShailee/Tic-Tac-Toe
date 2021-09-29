const CONSTS = require('./env');

const enviroment = CONSTS.enviroment;

module.exports = {
	enviroment,
	serverPort: CONSTS[enviroment].port,
	gamesApi: CONSTS[enviroment].gamesApi,
};
