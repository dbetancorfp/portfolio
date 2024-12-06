import { createI18n } from 'vue-i18n'
// Importa directamente los archivos JSON de idiomas
import en from './locales/en.json'
import es from './locales/es.json'
// Configura Vue I18n
const i18n = createI18n({
  legacy: false, // Usar la API Composition
  locale: localStorage.getItem('language') || 'es', // Recuperar idioma guardado en localStorage
  fallbackLocale: 'es', // Idioma de respaldo
  messages: { en, es }, // Mensajes cargados manualmente
})
export default i18n
