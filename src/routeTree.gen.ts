/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TradesImport } from './routes/trades'
import { Route as SettingsImport } from './routes/settings'
import { Route as CalculatorsImport } from './routes/calculators'
import { Route as BudgetImport } from './routes/budget'
import { Route as AuthImport } from './routes/auth'
import { Route as AssetsImport } from './routes/assets'
import { Route as IndexImport } from './routes/index'
import { Route as PortfolioIndexImport } from './routes/portfolio/index'
import { Route as PortfolioListImport } from './routes/portfolio/list'

// Create/Update Routes

const TradesRoute = TradesImport.update({
  id: '/trades',
  path: '/trades',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const CalculatorsRoute = CalculatorsImport.update({
  id: '/calculators',
  path: '/calculators',
  getParentRoute: () => rootRoute,
} as any)

const BudgetRoute = BudgetImport.update({
  id: '/budget',
  path: '/budget',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AssetsRoute = AssetsImport.update({
  id: '/assets',
  path: '/assets',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PortfolioIndexRoute = PortfolioIndexImport.update({
  id: '/portfolio/',
  path: '/portfolio/',
  getParentRoute: () => rootRoute,
} as any)

const PortfolioListRoute = PortfolioListImport.update({
  id: '/portfolio/list',
  path: '/portfolio/list',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/assets': {
      id: '/assets'
      path: '/assets'
      fullPath: '/assets'
      preLoaderRoute: typeof AssetsImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/budget': {
      id: '/budget'
      path: '/budget'
      fullPath: '/budget'
      preLoaderRoute: typeof BudgetImport
      parentRoute: typeof rootRoute
    }
    '/calculators': {
      id: '/calculators'
      path: '/calculators'
      fullPath: '/calculators'
      preLoaderRoute: typeof CalculatorsImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/trades': {
      id: '/trades'
      path: '/trades'
      fullPath: '/trades'
      preLoaderRoute: typeof TradesImport
      parentRoute: typeof rootRoute
    }
    '/portfolio/list': {
      id: '/portfolio/list'
      path: '/portfolio/list'
      fullPath: '/portfolio/list'
      preLoaderRoute: typeof PortfolioListImport
      parentRoute: typeof rootRoute
    }
    '/portfolio/': {
      id: '/portfolio/'
      path: '/portfolio'
      fullPath: '/portfolio'
      preLoaderRoute: typeof PortfolioIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/assets': typeof AssetsRoute
  '/auth': typeof AuthRoute
  '/budget': typeof BudgetRoute
  '/calculators': typeof CalculatorsRoute
  '/settings': typeof SettingsRoute
  '/trades': typeof TradesRoute
  '/portfolio/list': typeof PortfolioListRoute
  '/portfolio': typeof PortfolioIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/assets': typeof AssetsRoute
  '/auth': typeof AuthRoute
  '/budget': typeof BudgetRoute
  '/calculators': typeof CalculatorsRoute
  '/settings': typeof SettingsRoute
  '/trades': typeof TradesRoute
  '/portfolio/list': typeof PortfolioListRoute
  '/portfolio': typeof PortfolioIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/assets': typeof AssetsRoute
  '/auth': typeof AuthRoute
  '/budget': typeof BudgetRoute
  '/calculators': typeof CalculatorsRoute
  '/settings': typeof SettingsRoute
  '/trades': typeof TradesRoute
  '/portfolio/list': typeof PortfolioListRoute
  '/portfolio/': typeof PortfolioIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/assets'
    | '/auth'
    | '/budget'
    | '/calculators'
    | '/settings'
    | '/trades'
    | '/portfolio/list'
    | '/portfolio'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/assets'
    | '/auth'
    | '/budget'
    | '/calculators'
    | '/settings'
    | '/trades'
    | '/portfolio/list'
    | '/portfolio'
  id:
    | '__root__'
    | '/'
    | '/assets'
    | '/auth'
    | '/budget'
    | '/calculators'
    | '/settings'
    | '/trades'
    | '/portfolio/list'
    | '/portfolio/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AssetsRoute: typeof AssetsRoute
  AuthRoute: typeof AuthRoute
  BudgetRoute: typeof BudgetRoute
  CalculatorsRoute: typeof CalculatorsRoute
  SettingsRoute: typeof SettingsRoute
  TradesRoute: typeof TradesRoute
  PortfolioListRoute: typeof PortfolioListRoute
  PortfolioIndexRoute: typeof PortfolioIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AssetsRoute: AssetsRoute,
  AuthRoute: AuthRoute,
  BudgetRoute: BudgetRoute,
  CalculatorsRoute: CalculatorsRoute,
  SettingsRoute: SettingsRoute,
  TradesRoute: TradesRoute,
  PortfolioListRoute: PortfolioListRoute,
  PortfolioIndexRoute: PortfolioIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/assets",
        "/auth",
        "/budget",
        "/calculators",
        "/settings",
        "/trades",
        "/portfolio/list",
        "/portfolio/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/assets": {
      "filePath": "assets.tsx"
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/budget": {
      "filePath": "budget.tsx"
    },
    "/calculators": {
      "filePath": "calculators.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/trades": {
      "filePath": "trades.tsx"
    },
    "/portfolio/list": {
      "filePath": "portfolio/list.tsx"
    },
    "/portfolio/": {
      "filePath": "portfolio/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
