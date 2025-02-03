// Root layout
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthProvider } from '../providers/AuthProvider';

export const rootRoute = createRootRoute({
	component: () => <Layout />,
	notFoundComponent: () => <div>404</div>,
});

function Layout() {
	return (
		<AuthProvider>
			<Outlet />
			<TanStackRouterDevtools />
		</AuthProvider>
	);
}
