import { useQuery } from '@tanstack/react-query';
import { Navigate } from '@tanstack/react-router';
import { ROUTES } from '../constants/routes';
import { useAuth } from '../providers/AuthProvider';
import { userService } from '../services/userService';
import { ProfileSkeleton } from './ProfileSkeleton';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Профиль пользователя в системе
export function Profile() {
	const { logout } = useAuth();

	// Запрос на получение профиля
	const {
		data: user,
		isFetching,
		isError,
	} = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getProfile(),
		retry: false,
		enabled: !!localStorage.getItem('token'),
	});

	// Если ошибка, то мы удаляем токен и отправляем пользователя на форму авторизации
	if (isError) {
		localStorage.removeItem('token');
		return <Navigate to={ROUTES.LOGIN} />;
	}

	// Если запрос все еще идет мы рисуем скелетон
	return isFetching ? (
		<ProfileSkeleton />
	) : (
		<Card className='w-[350px] bg-[#0c1015] border-none'>
			<CardHeader>
				<CardTitle className='text-lg font-normal text-center'>
					Профиль
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='space-y-2'>
					<div className='text-sm text-gray-400'>Ваш Email</div>
					<div className='p-2 rounded bg-[#1c2127] text-sm break-all'>
						{user?.data?.email || 'example.email@gmail.com'}
					</div>
				</div>
				<div className='space-y-2'>
					<div className='text-sm text-gray-400'>Ваш ID</div>
					<div className='p-2 rounded bg-[#1c2127] text-sm font-mono break-all'>
						{user?.data?.id || 's32a6517-9742-4df3-a3ec'}
					</div>
				</div>
				<Button
					variant='outline'
					className='w-full mt-4'
					onClick={() => logout.mutate()}
					disabled={logout.isPending}
				>
					Выйти
				</Button>
			</CardContent>
		</Card>
	);
}
