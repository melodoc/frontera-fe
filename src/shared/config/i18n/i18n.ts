import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const enum Language {
  English = 'en',
  Russian = 'ru'
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.English,
    // TODO: Add dev global variable.
    debug: false,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

// eslint-disable-next-line import/no-default-export
export default i18n;
