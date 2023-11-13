import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
import FullScreenSpinner from 'src/components/FullScreenSpinner'

const withSuspense = (Component: React.FC) => {
  const ComponentWithSuspense = () => (
    <Suspense fallback={<FullScreenSpinner />}>
      <Component />
    </Suspense>
  )

  return ComponentWithSuspense
}

export type RouteAlias =
  | 'favorites'
  | 'devices'
  | 'settings'
  | 'addDevice'
  | 'deviceControls'
  | 'login'
  | 'register'

export type Route<Alias extends RouteAlias = RouteAlias> = {
  alias: Alias
  path: string
  element: React.ReactNode
  withFixedAppBar: boolean
  withBottomNavigation: boolean
}

const Favorites = lazy(() => import('src/pages/Favorites'))
const Devices = lazy(() => import('src/pages/Devices'))
const AddDevice = lazy(() => import('src/pages/AddDevice'))
const DeviceControls = lazy(() => import('src/pages/DeviceControls'))
const Settings = lazy(() => import('src/pages/Settings'))
const Login = lazy(() => import('src/pages/Login'))
const Register = lazy(() => import('src/pages/Register'))

const LazyFavorites = withSuspense(Favorites)
const LazyDevices = withSuspense(Devices)
const LazyAddDevice = withSuspense(AddDevice)
const LazyDeviceControls = withSuspense(DeviceControls)
const LazySettings = withSuspense(Settings)
const LazyLogin = withSuspense(Login)
const LazyRegister = withSuspense(Register)

export const routes: {
  [Alias in RouteAlias]: Route<Alias>
} = {
  favorites: {
    alias: 'favorites',
    path: '/favorites',
    element: <LazyFavorites />,
    withBottomNavigation: true,
    withFixedAppBar: true,
  },
  devices: {
    alias: 'devices',
    path: '/devices',
    element: <LazyDevices />,
    withBottomNavigation: true,
    withFixedAppBar: true,
  },
  settings: {
    alias: 'settings',
    path: '/settings',
    element: <LazySettings />,
    withBottomNavigation: true,
    withFixedAppBar: true,
  },
  addDevice: {
    alias: 'addDevice',
    path: '/add',
    element: <LazyAddDevice />,
    withBottomNavigation: false,
    withFixedAppBar: true,
  },
  deviceControls: {
    alias: 'deviceControls',
    path: '/controls/:id',
    element: <LazyDeviceControls />,
    withBottomNavigation: false,
    withFixedAppBar: true,
  },
  login: {
    alias: 'login',
    path: '/login',
    element: <LazyLogin />,
    withBottomNavigation: false,
    withFixedAppBar: false,
  },
  register: {
    alias: 'register',
    path: '/register',
    element: <LazyRegister />,
    withBottomNavigation: false,
    withFixedAppBar: false,
  },
}
