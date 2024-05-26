
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        product: "Product",
        // more translations
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido",
        product: "Producto",
        // more translations
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        product: "Produit",
        // more translations
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
