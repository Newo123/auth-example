import { AxiosResponse } from 'axios';
import { $api } from '../lib/api';
import { IAccessResponse } from '../types/access';

// Сервис по выполнению бизнес логики конкретного юзера
// в данном случае получения профиля пользователя
// можно так же сюда добавить изменения данных и добавление
class UserService {
	// Метод HTTP запроса для получения данных текущего пользователя
	async getProfile(): Promise<AxiosResponse<IAccessResponse>> {
		return $api.get<IAccessResponse>('/profile');
	}
}

export const userService = new UserService();
