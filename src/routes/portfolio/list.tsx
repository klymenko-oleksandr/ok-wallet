import { createFileRoute } from '@tanstack/react-router'
import { defineRouteContext } from '@/router/define-route-context.ts';

export const Route = createFileRoute('/portfolio/list')({
  component: RouteComponent,
  context: defineRouteContext({
    breadcrumbName: 'Всі портфелі',
  })
})

function RouteComponent() {
  return <div>Hello "/portfolio/list"!</div>
}
