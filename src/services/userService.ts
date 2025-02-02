import { AxiosResponse } from 'axios';
import { $api } from '../lib/api';
import { IAccessResponse } from '../types/access';

class UserService {
	async getProfile(): Promise<AxiosResponse<IAccessResponse>> {
		return $api.get<IAccessResponse>('/profile');
	}
}

export const userService = new UserService();
