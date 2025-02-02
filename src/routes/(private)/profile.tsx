import { createRoute, Navigate } from '@tanstack/react-router';
import { Profile } from '../../components/Profile';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const profileRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/profile',
	component: () => {
		if (!localStorage.getItem('token')) {
			return <Navigate to={ROUTES.LOGIN} />;
		}

		return <Profile />;
	},
});
