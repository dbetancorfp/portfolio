import { createI18n } from 'vue-i18n'
// Importa directamente los archivos JSON de idiomas
import en from './locales/en.json'
import es from './locales/es.json'
// Configura Vue I18n
const languageFromStorage = localStorage.getItem('language');
const initialLanguage = languageFromStorage ? languageFromStorage : 'es';

const i18n = createI18n({
    legacy: false,
    locale: initialLanguage,
    fallbackLocale: 'es',
    messages: { en, es },
});

export default i18n;