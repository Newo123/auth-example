import axios from 'axios';

export const $api = axios.create({
	baseURL: 'https://backend-ashen-seven-22.vercel.app',
});

$api.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');

		if (token) {
			config.headers['Authorization'] = token;
		}

		return config;
	},
	error => Promise.reject(error)
);

$api.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;

		if (
			error.response?.status === 403 ||
			(error.response?.status === 401 && !originalRequest._retry)
		) {
			originalRequest._retry = true;
			localStorage.removeItem('token');
			window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);
