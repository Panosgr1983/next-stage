import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import el from './locales/el';
import en from './locales/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      el: { translation: el },
      en: { translation: en }
    },
    fallbackLng: 'el',
    lng: 'el',
    interpolation: { escapeValue: false },
    debug: true, // για να δεις σφαλματα στη κονσόλα
  });

export default i18n;
