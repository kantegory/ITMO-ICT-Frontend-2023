import React from 'react'
import { Route } from 'react-router-dom'
import AddDevice from 'src/pages/AddDevice'
import DeviceControls from 'src/pages/DeviceControls'
import Devices from 'src/pages/Devices'
import Favorites from 'src/pages/Favorites'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'
import Settings from 'src/pages/Settings'

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

export const routes: {
  [Alias in RouteAlias]: Route<Alias>
} = {
  favorites: {
    alias: 'favorites',
    path: '/favorites',
    element: <Favorites />,
    withBottomNavigation: true,
    withFixedAppBar: true,
  },
  devices: {
    alias: 'devices',
    path: '/devices',
    element: <Devices />,
    withBottomNavigation: true,
    withFixedAppBar: true,
  },
  settings: {
    alias: 'settings',
    path: '/settings',
    element: <Settings />,
    withBottomNavigation: true,
    withFixedAppBar: true,
  },
  addDevice: {
    alias: 'addDevice',
    path: '/add',
    element: <AddDevice />,
    withBottomNavigation: false,
    withFixedAppBar: true,
  },
  deviceControls: {
    alias: 'deviceControls',
    path: '/controls/:id',
    element: <DeviceControls />,
    withBottomNavigation: false,
    withFixedAppBar: true,
  },
  login: {
    alias: 'login',
    path: '/login',
    element: <Login />,
    withBottomNavigation: false,
    withFixedAppBar: false,
  },
  register: {
    alias: 'register',
    path: '/register',
    element: <Register />,
    withBottomNavigation: false,
    withFixedAppBar: false,
  },
}
