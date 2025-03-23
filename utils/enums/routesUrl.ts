export enum RoutesUrls {
  HOME = '/',
  MOVIE = '/movie',
  RESULT = '/result',
  MORE_RESULTS = '/more-results',
  ERROR = '/error',
}

export type RouteUrl =
  | RoutesUrls.RESULT
  | RoutesUrls.MORE_RESULTS
  | RoutesUrls.HOME
  | RoutesUrls.ERROR
  | RoutesUrls.MOVIE;
