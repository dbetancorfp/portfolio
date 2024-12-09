import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

createApp(App).use(router).use(i18n).mount('#app')
