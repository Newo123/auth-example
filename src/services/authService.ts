import { AxiosResponse } from 'axios';
import { $api } from '../lib/api';
import { IAuthResponse } from '../types/access';
import { LoginFormValues } from '../types/form';

// Сервис для выполнения бизнес логики регистрации и авторизации в системе
class AuthService {
	// Метод отправки HTTP запроса на авторизацию
	async login(data: LoginFormValues): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/login', data);
	}
	// Метод отправки HTTP запрса на регистрацию
	async register(data: LoginFormValues): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/register', data);
	}

	// Метод отправки HTTP запроса на Logout
	async logout() {
		// логика по такому же примеру как и вверху, только на роут /logout
		return;
	}
}

export const authService = new AuthService();
