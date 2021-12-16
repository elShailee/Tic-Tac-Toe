import CONSTS from './env';

export const enviroment = CONSTS.enviroment;
export const serverBaseUrl = CONSTS[CONSTS.enviroment]?.serverBaseUrl;
export const frontBaseUrl = CONSTS[CONSTS.enviroment]?.frontBaseUrl;
export const API = CONSTS[CONSTS.enviroment]?.API;
export const pollingPort =
	CONSTS.enviroment === 'developement' ? CONSTS[CONSTS.enviroment].pollingPort : CONSTS[CONSTS.enviroment].serverPort;
export const socketPort =
	CONSTS.enviroment === 'developement' ? CONSTS[CONSTS.enviroment].socketPort : CONSTS[CONSTS.enviroment].serverPort;
