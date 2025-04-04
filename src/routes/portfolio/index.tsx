import { createFileRoute } from '@tanstack/react-router'
import { defineRouteContext } from '@/router/define-route-context.ts';

export const Route = createFileRoute('/portfolio/')({
  component: RouteComponent,
  context: defineRouteContext({
    breadcrumbName: 'Portfolio',
  })
})

function RouteComponent() {
  return <div>Hello "/portfolio/"!</div>
}
