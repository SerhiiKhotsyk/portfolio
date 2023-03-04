import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ua'],
    fallbackLng: window.localStorage.getItem('language') || 'en',
    debug: true,
    detection: {
      order: ['cookie', 'queryString'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'https://serhiikhotsyk.github.io/portfolio/locales/{{lng}}/transplation.json',
    },
  });

export default i18n;
