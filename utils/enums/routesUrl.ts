export enum RoutesUrls {
  HOME = '/',
  MOVIE = '/movie',
  RESULT = '/result',
  ERROR = '/error',
}

export type RouteUrl =
  | RoutesUrls.RESULT
  | RoutesUrls.HOME
  | RoutesUrls.ERROR
  | RoutesUrls.MOVIE;
