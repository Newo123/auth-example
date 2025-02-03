import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { ROUTES } from '../constants/routes';
import { loginSchema } from '../lib/validation';
import { useAuth } from '../providers/AuthProvider';
import { LoginFormValues } from '../types/form';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

// Форма авторизации в системе
export function LoginForm() {
	const { login } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema), // делаем симбиоз плагинов zod и react-hook-form
	});

	const onSubmit = (data: LoginFormValues) => {
		login.mutate(data);
	};
	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>Вход</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='Введите ваш Email'
							{...register('email')}
							disabled={login.isPending}
						/>
						{errors.email && (
							<p className='text-sm text-red-500'>{errors.email.message}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='password'>Пароль</Label>
						<Input
							id='password'
							type='password'
							placeholder='Введите пароль'
							{...register('password')}
							disabled={login.isPending}
						/>
						{errors.password && (
							<p className='text-sm text-red-500'>{errors.password.message}</p>
						)}
					</div>
					<Button
						type='submit'
						disabled={login.isPending}
						className='w-full mt-4'
						variant='outline'
					>
						{login.isPending ? 'Отправляю...' : 'Войти'}
					</Button>
				</form>
			</CardContent>
			<CardFooter className='flex justify-center'>
				<p className='text-sm'>
					Еще нет аккаунта?{' '}
					<Link
						disabled={login.isPending}
						to={ROUTES.REGISTER}
						className='text-blue-500 hover:underline'
					>
						Регистрация
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
