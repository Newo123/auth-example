import { z } from 'zod';

const auth = {
	email: z.string().email('Неверный адрес электронной почты'),
	password: z.string().min(6, 'Пароль должен содержать не менее 6 символов'),
};
export const loginSchema = z.object(auth);

export const registerSchema = z
	.object({ ...auth, confirmPassword: z.string() })
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});
