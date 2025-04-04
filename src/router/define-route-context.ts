import { RouterContext } from '@/router/router-context.ts';

export function defineRouteContext(ctx: RouterContext) {
  return () => ctx;
}
