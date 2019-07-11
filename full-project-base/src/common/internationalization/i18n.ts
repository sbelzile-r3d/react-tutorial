import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      fr
    },
    lng: 'fr',
    fallbackLng: 'fr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18next;
