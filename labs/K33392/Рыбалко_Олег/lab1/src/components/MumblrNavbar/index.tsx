import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap'
import { AuthState } from '@/store/slices/auth'
import { RootState } from '@/store'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'

export function MumblrNavbar() {
  const { t } = useTranslation('navbar')
  const { t: tGlobal } = useTranslation('global')
  const authStore = useSelector<RootState>((state) => state.auth) as AuthState
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(authStore.username !== '')
  }, [authStore])

  const openProfile = () => {
    navigate(`/profile/${authStore.username}`)
  }

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <Navbar bg={theme} data-bs-theme={theme} fixed="top">
          <Container>
            <Navbar.Brand>{tGlobal('title')}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => navigate('/feed')}
                active={location.pathname.startsWith('/feed')}
              >
                {t('feed')}
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate('/search')}
                active={location.pathname.startsWith('/search')}
              >
                {t('search')}
              </Nav.Link>

              {isLoggedIn && (
                <Nav.Link
                  onClick={openProfile}
                  active={location.pathname.startsWith('/profile')}
                >
                  {t('profile')}
                </Nav.Link>
              )}

              {!isLoggedIn && (
                <Nav.Link
                  onClick={() => navigate('/signin')}
                  active={location.pathname.startsWith('/signin')}
                >
                  {t('signIn')}
                </Nav.Link>
              )}
              <Dropdown onSelect={(e) => setTheme!(e!)}>
                <Dropdown.Toggle variant="link">
                  {t('themeButton')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="dark">
                    {t('darkThemeButton')}
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="light">
                    {t('lightThemeButton')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      )}
    </ThemeContext.Consumer>
  )
}

