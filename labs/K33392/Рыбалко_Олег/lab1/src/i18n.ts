import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLocalization from './locales/en/translation.json'

export const defaultNS = 'ns1'
export const resources = {
  en: enLocalization,
} as const

console.log(enLocalization)

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: enLocalization,
  },

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

