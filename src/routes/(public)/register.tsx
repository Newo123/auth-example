// страница регистрации
import { createRoute, Navigate } from '@tanstack/react-router';
import { RegisterForm } from '../../components/RegisterForm';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const registerRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/register',
	component: () => {
		// Проверка наличия токена, если он есть отправляем в профиль или next
		if (localStorage.getItem('token')) {
			return <Navigate to={ROUTES.PROFILE} />;
		}
		return <RegisterForm />;
	},
});
