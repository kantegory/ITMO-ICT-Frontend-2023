import { useTranslation } from 'react-i18next'
import styles from './SignUp.module.scss'
import { useState, useCallback } from 'react'
import store from '@/store'
import { loginAction } from '@/store/slices/auth'
import { useNavigate } from 'react-router-dom'

type UserData = {
  email: string
  username: string
  password: string
  retypedPassword: string
}

export function SignUpLayout() {
  const { t } = useTranslation('signup')
  const { t: tGlobal } = useTranslation('global')
  const navigate = useNavigate()
  const [userData, setUserData] = useState<UserData>({
    email: '',
    username: '',
    password: '',
    retypedPassword: '',
  })

  const signUp = useCallback(() => {
    // TODO: validate data and use API

    store.dispatch(loginAction(userData))
    navigate(`/profile/${userData.username}`)
  }, [userData, navigate])

  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.signupContainer}`}
    >
      <form className={styles.signupForm}>
        <h1>{tGlobal('title')}</h1>
        <h2 className="h3 mb-3 fw-normal">{t('createAccount')}</h2>

        <div className="form-floating">
          <input
            type="email"
            className={`form-control ${styles.formEmail}`}
            id="floatingInput"
            placeholder={t('emailLabel')}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.currentTarget.value })
            }
          />
          <label htmlFor="floatingInput">{t('emailLabel')}</label>
        </div>
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
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${styles.formRetypePassword}`}
            placeholder={t('retypePasswordLabel')}
            id="floatingRetypePassword"
            value={userData.retypedPassword}
            onChange={(e) =>
              setUserData({
                ...userData,
                retypedPassword: e.currentTarget.value,
              })
            }
          />
          <label htmlFor="floatingRetypePassword">
            {t('retypePasswordLabel')}
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" onClick={signUp}>
          {t('signupButton')}
        </button>
      </form>
    </div>
  )
}

