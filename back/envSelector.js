const CONSTS = require('./env');

const enviroment = CONSTS.enviroment;

module.exports = {
	enviroment,
	pollingPort: CONSTS[enviroment].pollingPort,
	socketPort: CONSTS[enviroment].socketPort,
	API: CONSTS[enviroment].API,
};
