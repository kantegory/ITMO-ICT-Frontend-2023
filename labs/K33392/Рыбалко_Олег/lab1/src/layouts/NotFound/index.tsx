import { useTranslation } from 'react-i18next'
import styles from './NotFound.module.scss'

export function PageNotFound() {
  const { t } = useTranslation('global')
  return <h1 className={`h1 ${styles.notFoundHeader}`}>{t('notFound')}</h1>
}

