import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from "./i18n/en";
import ar from "./i18n/ar";

const fallbackLng = [localStorage.getItem("i18nextLng") || "ar"];
const availableLanguages = ["en", "ar"];

i18n
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: true,
    whitelist: availableLanguages,

    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      },
    },

    interpolation: {
      escapeValue: false
    },
  });

export const changeLanguage = lang => {
  const newLang = lang;
  localStorage.setItem("i18nextLng", lang);
  i18n.changeLanguage(newLang);
};

export default i18n;