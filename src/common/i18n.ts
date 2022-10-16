import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from '../locales/ru.json';

const resources = {
  ru: { translation: ru }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ru',
  lng: 'ru', // default language
  debug: false,
  react: {
    useSuspense: false
  },
  interpolation: {
    format: (value, format, lng) => {
      if (format === 'intlNumber') {
        return new Intl.NumberFormat(lng).format(value);
      }

      return value;
    }
  }
});

export { i18n };
