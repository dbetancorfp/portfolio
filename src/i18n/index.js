import { createI18n } from 'vue-i18n';
import es from './es.json';
import en from './en.json';
const messages = {
  es,
  en,
};


const i18n = createI18n({
  locale: 'es',
  messages,
  globalInjection: true, 
});


export default i18n;