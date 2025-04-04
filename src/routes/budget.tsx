import { createFileRoute } from '@tanstack/react-router'
import { defineRouteContext } from '@/router/define-route-context.ts';

export const Route = createFileRoute('/budget')({
  component: RouteComponent,
  context: defineRouteContext({
    breadcrumbName: 'Budget',
  })
})

function RouteComponent() {
  return <div>Hello "/budget"!</div>
}
