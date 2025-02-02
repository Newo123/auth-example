import { createRoute, Navigate } from '@tanstack/react-router';
import { RegisterForm } from '../../components/RegisterForm';
import { ROUTES } from '../../constants/routes';
import { rootRoute } from '../__root';

export const registerRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/register',
	component: () => {
		if (localStorage.getItem('token')) {
			return <Navigate to={ROUTES.PROFILE} />;
		}
		return <RegisterForm />;
	},
});
