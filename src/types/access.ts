import { UseMutationResult } from '@tanstack/react-query';
import { LoginFormValues } from './form';

export interface IAuthResponse {
	token: string;
	type: string;
}
export interface IErrorResponse {
	code: string;
	message: string;
}
export interface IAccessResponse {
	email: string;
	id: string;
}

export interface AuthContextType {
	login: UseMutationResult<IAuthResponse, unknown, LoginFormValues, unknown>;
	register: UseMutationResult<IAuthResponse, unknown, LoginFormValues, unknown>;
	logout: UseMutationResult<void, unknown, void, unknown>;
}

export interface IAuthContext {
	login: (userData: LoginFormValues) => Promise<IAuthResponse>;
	register: (userData: LoginFormValues) => Promise<IAuthResponse>;
	logout: () => void;
	user: IAuthResponse | null;
}
