import { createFileRoute } from '@tanstack/react-router'
import { defineRouteContext } from '@/router/define-route-context.ts';
import data from "../dashboard/data.json"
import { DataTable } from '@/components/data-table';

export const Route = createFileRoute('/trades')({
  component: RouteComponent,
  context: defineRouteContext({
    breadcrumbName: 'Угоди',
  })
})

function RouteComponent() {
  return <DataTable data={data} />
}
