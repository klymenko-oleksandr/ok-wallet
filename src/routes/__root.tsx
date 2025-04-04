import Page from '@/dashboard/page.tsx';
import { createRootRouteWithContext } from '@tanstack/react-router';
import { RouterContext } from '@/router/router-context.ts';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Page />,
})
