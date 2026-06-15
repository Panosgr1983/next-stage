import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import el from './locales/el'; // Αν είναι el.ts, χρησιμοποίησε default export
import en from './locales/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      el: { translation: el },
      en: { translation: en },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    debug: true,
    detection: {
      // Ενεργοποιεί αναγνώριση από browser, cookie, localStorage, HTML lang κλπ
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
