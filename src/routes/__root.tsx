import { createRootRoute } from '@tanstack/react-router';
import Page from '@/dashboard/page.tsx';

export const Route = createRootRoute({
  component: () => <Page />,
})
