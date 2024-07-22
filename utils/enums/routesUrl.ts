export enum RoutesUrls {
  HOME = '/',
  RESULT = '/result',
  ERROR = '/error',
}

export type RouteUrl = RoutesUrls.RESULT | RoutesUrls.HOME | RoutesUrls.ERROR;
