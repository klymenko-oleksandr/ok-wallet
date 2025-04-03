import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/calculators')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/calculators"!</div>
}
