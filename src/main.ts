import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router";
import i18n from './i18n'; 

createApp(App)
  .use(router)
  .use(i18n) 
  .mount("#app");

import "bootstrap/dist/js/bootstrap.min";
