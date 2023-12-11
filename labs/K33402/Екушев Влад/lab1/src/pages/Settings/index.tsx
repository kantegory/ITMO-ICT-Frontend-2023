import { alpha, styled } from '@mui/material'
import React from 'react'
import { AppBar } from 'src/components/AppBar'
import Switch from 'src/components/Switch'
import { useAppDispatch, useAppSelector } from 'src/store'
import { setTheme } from 'src/store/app'
import { Theme } from 'src/types/Theme'

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
}))

const OnOffButton = styled('label')(({ theme }) => ({
  padding: theme.spacing(1.25, 2),
  paddingRight: theme.spacing(1.25),
  borderRadius: 100,
  boxShadow: '0 0 0 2px inset ' + alpha(theme.palette.text.primary, 0.12),
  fontFamily: theme.typography.fontFamily,
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  ...theme.mixins.button,
  '&:active': {
    transform: 'none',
  },
}))

const Settings: React.FC = () => {
  const theme = useAppSelector((store) => store.app.theme)
  const dispatch = useAppDispatch()

  const handleDarkThemeSwitchChange = () => {
    dispatch(setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
  }

  return (
    <>
      <AppBar fixed header="Настройки" />
      <Content>
        <OnOffButton>
          Тёмная тема
          <Switch
            onChange={handleDarkThemeSwitchChange}
            checked={theme === Theme.DARK}
            id="dark-theme-switch"
          />
        </OnOffButton>
      </Content>
    </>
  )
}

export default Settings
