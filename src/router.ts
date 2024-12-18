import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import Aboutme from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Error404 from "./components/Error404.vue";


// Definir las rutas
const routes = [
  // Redirigir a "/es/about" si no hay idioma especificado
  { path: "/", redirect: "/es/aboutme" },
  { path: "/:lang/aboutme", name: "Aboutme", component: Aboutme, beforeEnter: validateLang },
  { path: "/:lang/projects", name: "Projects", component: Projects, beforeEnter: validateLang },
  { path: "/:lang/skills", name: "Skills", component: Skills, beforeEnter: validateLang },
  { path: "/:lang/experience", name: "Experience", component: Experience, beforeEnter: validateLang },
  { path: "/:lang/contact", name: "Contact", component: Contact, beforeEnter: validateLang },
  { path: "/:pathMatch(.*)*", name: "Error404", component: Error404, beforeEnter: validateLang }, // Ruta para 404
];

// Función para validar el idioma y redirigir si no es válido
function validateLang(
  to: RouteLocationNormalized, // Tipo de la ruta de destino
  from: RouteLocationNormalized, // Tipo de la ruta de origen
  next: NavigationGuardNext // Tipo de la función `next`
) {
  let lang = to.params.lang; // Obtener el parámetro `lang` de la ruta
  
  // Asegurarnos de que lang es un string, no un arreglo
  if (Array.isArray(lang)) {
    lang = lang[0]; // Si es un arreglo, tomamos el primer valor
  }

  const supportedLanguages = ["en", "es"]; // Idiomas soportados
  
  // Si el idioma no está soportado, redirigir al idioma por defecto (es)
  if (!supportedLanguages.includes(lang)) {
    return next("/es/about"); // Redirigir al idioma por defecto
  }
  
  next(); // Continuar la navegación
}

// Crear el router con la configuración de rutas
const router = createRouter({
  history: createWebHistory(),
  routes, // Usar las rutas definidas anteriormente
});

export default router;



