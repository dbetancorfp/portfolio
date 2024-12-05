import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import FontAwesomeIcon from './plugins/fontawesome';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n';


const app = createApp(App)

app.use(router)
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
