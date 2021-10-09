const CONSTS = require('./env');

const enviroment = CONSTS.enviroment;

module.exports = {
	enviroment,
	serverPort: CONSTS[enviroment].port,
	API: CONSTS[enviroment].API,
};
