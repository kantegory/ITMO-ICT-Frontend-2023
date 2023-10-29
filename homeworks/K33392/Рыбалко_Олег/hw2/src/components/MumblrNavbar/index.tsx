import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { AuthState } from '@/store/slices/auth'
import { RootState } from '@/store'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

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
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
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
        </Nav>
      </Container>
    </Navbar>
  )
}

