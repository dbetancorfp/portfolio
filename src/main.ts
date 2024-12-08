import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import i18n from "./i18n/i18n"; // Importa i18n

const app = createApp(App);


app.use(router);
app.use(i18n)
app.mount('#app');