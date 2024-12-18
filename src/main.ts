import { createApp, watchEffect } from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";
const app = createApp(App);
// Sincroniza el idioma en la URL con i18n
watchEffect(() => {
 const currentRoute = router.currentRoute.value; // Obtén la ruta actual
 const lang = currentRoute.params.lang || "es"; // Idioma en la ruta o por defecto
 const validLang: "es" | "en" = lang === "es" || lang === "en" ? lang : "es";
 if (i18n.global.locale.value !== validLang) {
    i18n.global.locale.value = validLang; // Actualiza el idioma de i18n
    localStorage.setItem("language", validLang); // Guarda el idioma en localStorage
  }
});
app.use(i18n);
app.use(router);
app.mount("#app");
