import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'

import { createApp, watchEffect } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
const app = createApp(App)
// Sincroniza el idioma en la URL con i18n
type SupportedLanguages = 'en' | 'es' // Define un tipo para los idiomas soportados

watchEffect(() => {
  const currentRoute = router.currentRoute.value // Obtén la ruta actual
  const lang: SupportedLanguages = (currentRoute.params.lang as SupportedLanguages) || 'es' // Idioma en la ruta o por defecto

  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang // Actualiza el idioma de i18n
    localStorage.setItem('language', lang) // Guarda el idioma en localStorage
  }
})
app.use(i18n)
app.use(router)
app.mount('#app')
