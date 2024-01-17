import { useTranslation } from 'react-i18next'
import { useState, useCallback } from 'react'
import styles from './SignIn.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { authWithPassword } from '@/store/slices/users'

type UserData = {
  username: string
  password: string
}

export function SignInLayout() {
  const { t } = useTranslation('signin')
  const { t: tGlobal } = useTranslation('global')
  const navigate = useNavigate()
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: '',
  })
  const dispatch = useDispatch()

  const signIn = useCallback(() => {
    dispatch(authWithPassword(userData.username, userData.password))
    navigate(`/profile/${userData.username}`)
  }, [userData, navigate, dispatch])

  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.signinContainer}`}
    >
      <form className={`${styles.signinForm}`}>
        <h1 className="h1 mb-3">{tGlobal('title')}</h1>
        <h1 className="h3 mb-3 fw-normal">{t('signinToAccount')}</h1>

        <div className="form-floating">
          <input
            type="text"
            className={`form-control ${styles.formUsername}`}
            id="floatingUsername"
            placeholder={t('usernameLabel')}
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.currentTarget.value })
            }
          />
          <label htmlFor="floatingUsername">{t('usernameLabel')}</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${styles.formPassword}`}
            id="floatingPassword"
            placeholder={t('passwordLabel')}
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.currentTarget.value })
            }
          />
          <label htmlFor="floatingPassword">{t('passwordLabel')}</label>
        </div>
        <Button variant="primary" size="lg" className="w-100" onClick={signIn}>
          {t('signinButton')}
        </Button>
        <Link to="/signup" className={styles.createAccountButton}>
          {t('createAccountButton')}
        </Link>
      </form>
    </div>
  )
}

