import { createFileRoute } from '@tanstack/react-router'
import { defineRouteContext } from '@/router/define-route-context.ts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnalyticsForm } from '@/components/analytics-form.tsx';
import { PasswordForm } from '@/components/password-form.tsx';

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
  context: defineRouteContext({
    breadcrumbName: 'Обліковий запис',
  })
})

function RouteComponent() {
  return (
    <div className="@container/page flex flex-1 flex-col gap-8 p-6">
      <Tabs defaultValue="subscription" className="gap-6">
        <div
          data-slot="dashboard-header"
          className="flex items-center justify-between"
        >
          <TabsList className="w-full @3xl/page:w-fit">
            <TabsTrigger value="subscription">Підписка</TabsTrigger>
            <TabsTrigger value="analytics">Загальне</TabsTrigger>
            <TabsTrigger value="reports">Безпека</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="subscription" className="flex flex-col gap-4">
          <div>Поточний план - Безкоштовний</div>
        </TabsContent>
        <TabsContent value="analytics" className="flex flex-col gap-4">
          <AnalyticsForm />
        </TabsContent>
        <TabsContent value="reports" className="flex flex-col gap-4">
          <PasswordForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
