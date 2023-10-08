import { matchPath } from 'react-router'
import { routes } from 'src/config/routes'

export const getRouteByPath = (path: string) => {
  return Object.values(routes).find((route) => !!matchPath(route.path, path))
}
