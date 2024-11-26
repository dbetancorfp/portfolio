import { createI18n } from "vue-i18n";
import en from "./locals/en.json";
import es from "./locals/es.json";

const i18n = createI18n({
    legacy: true,
    locale: 'es',
    fallbackLocale: 'es',
    messages: { en: en, es: es },
});

export default i18n;