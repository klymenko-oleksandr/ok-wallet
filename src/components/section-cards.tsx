import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Загальний капітал</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            $101,255
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="green" className="size-5 rounded-full p-1">
              <TrendingUpIcon className="size-3" />
            </Badge>
            <span className="font-medium">+$15</span>
            <span className="text-muted-foreground">(+2.54%) Всього</span>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{'{{Назва портфелю}}'}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            $45,678
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="size-5 rounded-full p-1">
              <TrendingDownIcon className="size-3" />
            </Badge>
            <span className="font-medium">-$45</span>
            <span className="text-muted-foreground">(-3.5%) Всього</span>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{'{{Назва портфелю}}'}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            $45,678
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="green" className="size-5 rounded-full p-1">
              <TrendingUpIcon className="size-3" />
            </Badge>
            <span className="font-medium">+$15</span>
            <span className="text-muted-foreground">(+2.54%) Всього</span>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{'{{Назва портфелю}}'}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            $45,678
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="green" className="size-5 rounded-full p-1">
              <TrendingUpIcon className="size-3" />
            </Badge>
            <span className="font-medium">+$15</span>
            <span className="text-muted-foreground">(+2.54%) Всього</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
