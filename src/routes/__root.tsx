import HomePage from '@/dashboard/home-page.tsx';
import { createRootRouteWithContext } from '@tanstack/react-router';
import { RouterContext } from '@/router/router-context.ts';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <HomePage />,
})
