import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { Route } from 'src/config/routes'
import { getRouteByPath } from 'src/utils/getRouteByPath'

export const useRoute = (): Route | undefined => {
  const location = useLocation()
  const route = useMemo(
    () => getRouteByPath(location.pathname),
    [location.pathname]
  )
  return route
}
