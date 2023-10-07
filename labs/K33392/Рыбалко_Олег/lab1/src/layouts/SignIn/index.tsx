import { useTranslation } from 'react-i18next'
import styles from './SignIn.module.scss'

export function SignInLayout() {
  const { t } = useTranslation('signin')
  const { t: tGlobal } = useTranslation('global')

  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.signinContainer}`}
    >
      <form className={styles.signinForm}>
        <h1 className="h1 mb-3">{tGlobal('title')}</h1>
        <h1 className="h3 mb-3 fw-normal">{t('signinToAccount')}</h1>

        <div className="form-floating">
          <input
            type="email"
            className={`form-control ${styles.formEmail}`}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">{t('emailLabel')}</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${styles.formPassword}`}
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">{t('passwordLabel')}</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          {t('signinButton')}
        </button>
      </form>
    </div>
  )
}

