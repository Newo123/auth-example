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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const onSuccess = (data: IAuthResponse) => {
		localStorage.setItem('token', data.token);
		queryClient.invalidateQueries({ queryKey: ['user'] });
		navigate({ to: ROUTES.PROFILE });
	};
	const onError = (data: AxiosError<IErrorResponse>) => {
		if (data instanceof AxiosError) {
			toast.error(`${data.response?.data.message}`);
		}
	};

	const login = useMutation({
		mutationFn: (data: LoginFormValues): Promise<IAuthResponse> =>
			authService.login(data).then(response => response.data),
		onSuccess: data => onSuccess(data),
		onError: (data: AxiosError<IErrorResponse>) => onError(data),
	});
	const register = useMutation({
		mutationFn: (data: LoginFormValues): Promise<IAuthResponse> =>
			authService.register(data).then(response => response.data),
		onSuccess: data => onSuccess(data),
		onError: (data: AxiosError<IErrorResponse>) => onError(data),
	});

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

export const useAuth = () => useContext(AuthContext) as AuthContextType;
