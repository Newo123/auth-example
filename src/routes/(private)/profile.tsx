// страница профиля
import { createRoute, Navigate } from '@tanstack/react-router';
import { Profile } from '../../components/Profile';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const profileRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/profile',
	component: () => {
		// Проверка наличия токена, если его нет отправляем на логин или next
		if (!localStorage.getItem('token')) {
			return <Navigate to={ROUTES.LOGIN} />;
		}

		return <Profile />;
	},
});
