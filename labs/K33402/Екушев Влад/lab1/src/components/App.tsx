import * as React from 'react'
import { CssBaseline, GlobalStyles, ThemeProvider, styled } from '@mui/material'
import { Outlet } from 'react-router'
import { theme } from 'src/config/theme'
import BottomNavigation, {
  BOTTOM_NAVIGATION_HEIGHT,
} from 'src/components/BottomNavigation'
import { useRoute } from 'src/hooks/useRoute'
import SimpleBar from 'simplebar-react'
import cx from 'classnames'
import { APP_BAR_HEIGHT } from './AppBar'

const Container = styled(SimpleBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'var(--appBarHeight)',
  height: 'calc(100% - var(--bottomNavigationHeight) - var(--appBarHeight))',
  width: '100%',
  background: theme.palette.background.paper,
  zIndex: 1,
  ['--bottomNavigationHeight']: '0px',
  ['--appBarHeight']: '0px',
  '&.App--withBottomNavigation': {
    ['--bottomNavigationHeight']: BOTTOM_NAVIGATION_HEIGHT + 'px',
  },
  '&.App--withFixedAppBar': {
    ['--appBarHeight']: APP_BAR_HEIGHT + 'px',
  },
}))

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      'html, body, #root': {
        height: '100%',
        overflow: 'hidden',
      },
      '.simplebar-content-wrapper': {
        outline: 'none',
      },
      '.simplebar-content': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      '.simplebar-scrollbar.simplebar-visible:before': {
        opacity: 0.12,
      },
      '.simplebar-scrollbar:before': {
        background: theme.palette.text.primary,
        top: 4,
        bottom: 4,
        left: 4,
        right: 4,
      },
      '.simplebar-track.simplebar-vertical': {
        width: 15,
      },
      [`input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration`]: {
        WebkitAppearance: 'none',
      },
    })}
  />
)

export const App: React.FC = () => {
  const route = useRoute()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Container
        className={cx({
          'App--withFixedAppBar': route?.withFixedAppBar,
          'App--withBottomNavigation': route?.withBottomNavigation,
        })}
      >
        <Outlet />
      </Container>
      {route?.withBottomNavigation && <BottomNavigation />}
    </ThemeProvider>
  )
}
