import { Route, RouteAlias, routes } from 'src/config/routes'

export const getRouteByAlias = (alias: RouteAlias): Route => {
  return routes[alias]
}
