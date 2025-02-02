import { AxiosResponse } from 'axios';
import { $api } from '../lib/api';
import { IAuthResponse } from '../types/access';
import { LoginFormValues } from '../types/form';

class AuthService {
	async login(data: LoginFormValues): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/login', data);
	}
	async register(data: LoginFormValues): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/register', data);
	}
	async logout() {
		// логика по такому же примеру как и вверху, только на роут /logout
		return;
	}
}

export const authService = new AuthService();
