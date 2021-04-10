import en from "../languages/en-US.js";
import ru from "../languages/ru-RU.js";
import uz from "../languages/uz-UZ.js";

export const i18N = {
  loadLanguagesAsync: true,
  locales: ["en", "ru", "uz"],
  defaultLocale: "en",
  rootRedirect: 'en',
  strategy: 'prefix',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    onlyOnRoot: true,
  },
  routes: {
    index: {
      en: "/",
      ru: "/",
      uz: "/"
    },
  },
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, ru, uz },
    warnHtmlInMessage: 'off',
    disableNoTranslationWarning: true,
    silentTranslationWarn: true
  }
};

