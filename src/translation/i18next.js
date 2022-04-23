import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const Languages = ['en', 'fr']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: Languages,
    keySeparator: false,
    defaultNS: 'translation',
    ns: ['translation'],
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    load: 'unspecific',
    react: {
      wait: true,
    },    
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n