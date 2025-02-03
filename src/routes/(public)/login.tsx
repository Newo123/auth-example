// страница логина
import { createRoute, Navigate } from '@tanstack/react-router';
import { LoginForm } from '../../components/LoginForm';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/login',
	component: () => {
		// Проверка наличия токена, если он есть отправляем в профиль или next
		if (localStorage.getItem('token')) {
			return <Navigate to={ROUTES.PROFILE} />;
		}
		return <LoginForm />;
	},
});
