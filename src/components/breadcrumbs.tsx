import { Link, useRouterState } from '@tanstack/react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Breadcrumbs() {
  const matches = useRouterState({ select: (s) => s.matches })
  // Ignore root ("/") route or those without a path
  const filtered = matches.filter((match) => match.pathname !== "/");

  return (
    <Breadcrumb className="hidden md:block">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Головна</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {filtered.map((match, index) => {
          const isLast = index === filtered.length - 1;
          const path = match.pathname;
          const name = match.context.breadcrumbName ?? match.routeId;

          return (
            <div key={match.id} className="contents">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={path}>{name}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
