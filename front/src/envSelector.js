import CONSTS from './env';

export const enviroment = CONSTS.enviroment;
export const serverBaseUrl = CONSTS[CONSTS.enviroment]?.serverBaseUrl;
export const frontBaseUrl = CONSTS[CONSTS.enviroment]?.frontBaseUrl;
export const API = CONSTS[CONSTS.enviroment]?.API;
export const serverPort = CONSTS[CONSTS.enviroment]?.serverPort;
