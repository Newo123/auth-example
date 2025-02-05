/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as privateIndexImport } from './routes/(private)/index'
import { Route as publicRegisterImport } from './routes/(public)/register'
import { Route as publicLoginImport } from './routes/(public)/login'
import { Route as privateProfileImport } from './routes/(private)/profile'

// Create/Update Routes

const privateIndexRoute = privateIndexImport.update({
  id: '/(private)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const publicRegisterRoute = publicRegisterImport.update({
  id: '/(public)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const publicLoginRoute = publicLoginImport.update({
  id: '/(public)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const privateProfileRoute = privateProfileImport.update({
  id: '/(private)/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(private)/profile': {
      id: '/(private)/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof privateProfileImport
      parentRoute: typeof rootRoute
    }
    '/(public)/login': {
      id: '/(public)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof publicLoginImport
      parentRoute: typeof rootRoute
    }
    '/(public)/register': {
      id: '/(public)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof publicRegisterImport
      parentRoute: typeof rootRoute
    }
    '/(private)/': {
      id: '/(private)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof privateIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/profile': typeof privateProfileRoute
  '/login': typeof publicLoginRoute
  '/register': typeof publicRegisterRoute
  '/': typeof privateIndexRoute
}

export interface FileRoutesByTo {
  '/profile': typeof privateProfileRoute
  '/login': typeof publicLoginRoute
  '/register': typeof publicRegisterRoute
  '/': typeof privateIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(private)/profile': typeof privateProfileRoute
  '/(public)/login': typeof publicLoginRoute
  '/(public)/register': typeof publicRegisterRoute
  '/(private)/': typeof privateIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/profile' | '/login' | '/register' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/profile' | '/login' | '/register' | '/'
  id:
    | '__root__'
    | '/(private)/profile'
    | '/(public)/login'
    | '/(public)/register'
    | '/(private)/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  privateProfileRoute: typeof privateProfileRoute
  publicLoginRoute: typeof publicLoginRoute
  publicRegisterRoute: typeof publicRegisterRoute
  privateIndexRoute: typeof privateIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  privateProfileRoute: privateProfileRoute,
  publicLoginRoute: publicLoginRoute,
  publicRegisterRoute: publicRegisterRoute,
  privateIndexRoute: privateIndexRoute,
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
        "/(private)/profile",
        "/(public)/login",
        "/(public)/register",
        "/(private)/"
      ]
    },
    "/(private)/profile": {
      "filePath": "(private)/profile.tsx"
    },
    "/(public)/login": {
      "filePath": "(public)/login.tsx"
    },
    "/(public)/register": {
      "filePath": "(public)/register.tsx"
    },
    "/(private)/": {
      "filePath": "(private)/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
