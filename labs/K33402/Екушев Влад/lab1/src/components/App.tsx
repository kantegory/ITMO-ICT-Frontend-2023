import * as React from 'react'
import { CssBaseline, GlobalStyles, ThemeProvider, styled } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { THEME_NAME_TO_MUI_THEME } from 'src/config/theme'
import BottomNavigation, {
  BOTTOM_NAVIGATION_HEIGHT,
} from 'src/components/BottomNavigation'
import { useRoute } from 'src/hooks/useRoute'
import SimpleBar from 'simplebar-react'
import cx from 'classnames'
import { APP_BAR_HEIGHT } from './AppBar'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import FullScreenSpinner from './FullScreenSpinner'
import { useAppDispatch, useAppSelector } from 'src/store'
import { FetchingState } from 'src/types/FetchingState'
import { fetchUserSelf } from 'src/store/auth'

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
  const user = useAppSelector((store) => store.auth.user)
  const userFetchState = useAppSelector((store) => store.auth.state)
  const themeName = useAppSelector((store) => store.app.theme)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const theme = THEME_NAME_TO_MUI_THEME[themeName]
  const shouldRenderSpinner =
    userFetchState === FetchingState.PENDING ||
    userFetchState === FetchingState.IDLE

  React.useEffect(() => {
    dispatch(fetchUserSelf())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    // Unauthorized state, show login page
    if (
      (userFetchState === FetchingState.FULFILLED && !user) ||
      userFetchState === FetchingState.REJECTED
    ) {
      navigate(getRouteByAlias('login').path)
    }
  }, [navigate, user, userFetchState])

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {globalStyles}
        {shouldRenderSpinner && <FullScreenSpinner />}
        {!shouldRenderSpinner && (
          <>
            <Container
              className={cx({
                'App--withFixedAppBar': route?.withFixedAppBar,
                'App--withBottomNavigation': route?.withBottomNavigation,
              })}
            >
              <Outlet />
            </Container>
            {route?.withBottomNavigation && <BottomNavigation />}
          </>
        )}
      </>
    </ThemeProvider>
  )
}
