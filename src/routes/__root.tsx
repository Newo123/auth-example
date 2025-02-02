import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthProvider } from '../providers/authProvider';

export const rootRoute = createRootRoute({
	component: () => <Layout />,
	notFoundComponent: () => <div>404</div>,
});

function Layout() {
	return (
		<AuthProvider>
			{/* <nav>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/profile'>Profile</Link>
				<Link to='/register'>Register</Link>
			</nav> */}
			<Outlet />
			<TanStackRouterDevtools />
		</AuthProvider>
	);
}
