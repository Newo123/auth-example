import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { ROUTES } from '../constants/routes';
import { registerSchema } from '../lib/validation';
import { useAuth } from '../providers/authProvider';
import { RegisterFormValues } from '../types/form';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function RegisterForm() {
	const { register: registration } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterFormValues) => {
		registration.mutate(data);
	};

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>Регистрация</CardTitle>
				<CardDescription>Создайте новый аккаунт.</CardDescription>
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
							disabled={registration.isPending}
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
							placeholder='Придумайте пароль'
							{...register('password')}
							disabled={registration.isPending}
						/>
						{errors.password && (
							<p className='text-sm text-red-500'>{errors.password.message}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='confirmPassword'>Подтвердите пароль</Label>
						<Input
							id='confirmPassword'
							type='password'
							placeholder='Подтвердите пароль'
							{...register('confirmPassword')}
							disabled={registration.isPending}
						/>
						{errors.confirmPassword && (
							<p className='text-sm text-red-500'>
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<Button
						type='submit'
						disabled={registration.isPending}
						className='w-full mt-4'
						variant='outline'
					>
						{registration.isPending ? 'Отправляю...' : 'Создать аккаунт'}
					</Button>
				</form>
			</CardContent>
			<CardFooter className='flex justify-center'>
				<p className='text-sm'>
					Уже есть аккаунт?{' '}
					<Link
						disabled={registration.isPending}
						to={ROUTES.LOGIN}
						className='text-blue-500 hover:underline'
					>
						Войти
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
