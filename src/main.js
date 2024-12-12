import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 
import diccionario from './diccionario'

const i18n = createI18n({
    messages: diccionario,
    fallbackFormat :'es',
    locale:navigator.language.startsWith('es')? 'es':'en'
  })
  

createApp(App).use(i18n).use(router).mount('#app')
