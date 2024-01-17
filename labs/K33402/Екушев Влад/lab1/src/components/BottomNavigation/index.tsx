import React, { useState } from 'react'
import { Paper, styled } from '@mui/material'
import {
  DevicesOther,
  DevicesOtherOutlined,
  Favorite,
  FavoriteBorder,
  Settings,
  SettingsOutlined,
} from '@mui/icons-material'
import BottomNavigationAction from './BottomNavigationAction'
import { RouteAlias } from 'src/config/routes'
import { useRoute } from 'src/hooks/useRoute'
import { generatePath, useNavigate } from 'react-router'
import { getRouteByAlias } from 'src/utils/getRoutePath'

export const BOTTOM_NAVIGATION_HEIGHT = 64

const Root = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'row',
  height: BOTTOM_NAVIGATION_HEIGHT,
}))

export type BottomNavigationItemName = 'favorites' | 'devices' | 'settings'
export type BottomNavigationItem = {
  item: BottomNavigationItemName
  to: RouteAlias
  active?: boolean
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    item: BottomNavigationItem
  ) => void
  icon: React.ReactElement
  label: string
  iconActive?: React.ReactElement
}

const BOTTOM_NAVIGATION_ITEMS: BottomNavigationItem[] = [
  {
    icon: <FavoriteBorder />,
    iconActive: <Favorite />,
    label: 'Избранное',
    item: 'favorites',
    to: 'favorites',
  },
  {
    icon: <DevicesOtherOutlined />,
    iconActive: <DevicesOther />,
    label: 'Девайсы',
    item: 'devices',
    to: 'devices',
  },
  {
    icon: <SettingsOutlined />,
    iconActive: <Settings />,
    label: 'Настройки',
    item: 'settings',
    to: 'settings',
  },
]

const BottomNavigation: React.FC = () => {
  const route = useRoute()
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | undefined>(route?.alias)

  const handleItemClick = (
    _e: React.MouseEvent<HTMLButtonElement>,
    item: BottomNavigationItem
  ) => {
    setSelected(item.item)
    navigate(generatePath(getRouteByAlias(item.to).path))
  }

  return (
    <Root elevation={0} square>
      {BOTTOM_NAVIGATION_ITEMS.map((item) => (
        <BottomNavigationAction
          key={item.item}
          item={item}
          onClick={handleItemClick}
          active={selected === item.item}
        />
      ))}
    </Root>
  )
}

export default BottomNavigation
