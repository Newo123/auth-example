// главная страница
import { createRoute, Navigate } from '@tanstack/react-router';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => {
		// Проверка наличия токена, если его нет отправляем на логин или next
		if (!localStorage.getItem('token')) {
			return <Navigate to={ROUTES.LOGIN} />;
		}

		return <div>Главная страница</div>;
	},
});
