import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/trades')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/trades"!</div>
}
