import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { AxiosError } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import toast from 'react-hot-toast';
import { ROUTES } from '../constants/routes';
import { authService } from '../services/authService';
import {
	AuthContextType,
	IAuthResponse,
	IErrorResponse,
} from '../types/access';
import { LoginFormValues } from '../types/form';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер контекста авторизации
export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	// Метод обработки success от сервера для login и register
	const onSuccess = (data: IAuthResponse) => {
		localStorage.setItem('token', data.token);
		queryClient.invalidateQueries({ queryKey: ['user'] });
		navigate({ to: ROUTES.PROFILE });
	};
	// Метод обработки error от сервера для login и register
	const onError = (data: AxiosError<IErrorResponse>) => {
		if (data instanceof AxiosError) {
			toast.error(`${data.response?.data.message}`);
		}
	};

	// Мутация авторизации
	const login = useMutation({
		mutationFn: (data: LoginFormValues): Promise<IAuthResponse> =>
			authService.login(data).then(response => response.data),
		onSuccess: data => onSuccess(data),
		onError: (data: AxiosError<IErrorResponse>) => onError(data),
	});

	// Мутация регистрации
	const register = useMutation({
		mutationFn: (data: LoginFormValues): Promise<IAuthResponse> =>
			authService.register(data).then(response => response.data),
		onSuccess: data => onSuccess(data),
		onError: (data: AxiosError<IErrorResponse>) => onError(data),
	});

	// Мутация выхода из аккаунта
	const logout = useMutation({
		mutationFn: authService.logout,
		onSuccess: () => {
			localStorage.removeItem('token');
			queryClient.clear();
			navigate({ to: ROUTES.LOGIN });
		},
	});

	return (
		<AuthContext.Provider value={{ login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
};

// Делаем экспорт хука для использования контекста провайдера Auth
export const useAuth = () => useContext(AuthContext) as AuthContextType;
