import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { indexRoute } from './routes/(private)';
import { profileRoute } from './routes/(private)/profile';
import { loginRoute } from './routes/(public)/login';
import { registerRoute } from './routes/(public)/register';
import { rootRoute } from './routes/__root';
const routeTree = rootRoute.addChildren([
	indexRoute,
	loginRoute,
	profileRoute,
	registerRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Toaster />
		</QueryClientProvider>
	</StrictMode>
);
