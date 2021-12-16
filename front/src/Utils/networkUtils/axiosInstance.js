import Axios from 'axios';
import { serverBaseUrl, pollingPort, enviroment } from 'envSelector';

const axiosInstance = Axios.create({ baseURL: serverBaseUrl + ':' + pollingPort });

axiosInstance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		console.log(error);
	},
);

axiosInstance.interceptors.response.use(
	function (response) {
		if (response.status === 202) {
			logErrorMessage(response);
			return null;
		}
		return response.data;
	},
	function (error) {
		logErrorMessage(error.response);
	},
);

const logErrorMessage = response => {
	if (enviroment === 'developement') {
		console.error(`Error message: ${response.data}`);
	}
};

export default axiosInstance;
