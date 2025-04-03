import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio/list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/portfolio/list"!</div>
}
