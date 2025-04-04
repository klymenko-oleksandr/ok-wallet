import { createFileRoute } from '@tanstack/react-router';
import { SectionCards } from '@/components/section-cards.tsx';
import { ChartMonthlyBudget } from '@/components/chart-monthly-budget.tsx';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
        </div>
        <div className="px-4 lg:px-6">
          <ChartMonthlyBudget />
        </div>
      </div>
    </div>
  )
}
