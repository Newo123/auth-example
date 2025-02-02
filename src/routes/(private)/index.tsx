import { createRoute, Navigate } from '@tanstack/react-router';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => {
		if (!localStorage.getItem('token')) {
			return <Navigate to={ROUTES.LOGIN} />;
		}

		return <div>Главная страница</div>;
	},
});
