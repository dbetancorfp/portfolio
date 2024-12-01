import { createApp } from 'vue';
import i18n from './i18n'; // Corrected import
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
