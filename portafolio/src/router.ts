// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import type {RouteLocationNormalized,NavigationGuardNext,RouteRecordRaw } from 'vue-router'
import Aboutme from './components/Aboutme.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Error404 from './components/Error404.vue'
const routes:RouteRecordRaw[] = [
  // Redirigir a "/es/about" si no hay idioma especificado
  { path: '/', redirect: '/es/about' },
  { path: '/:lang/about', name: 'About', component: Aboutme, beforeEnter: validateLang },
  { path: '/:lang/projects', name: 'Projects', component: Projects, beforeEnter: validateLang },
  { path: '/:lang/skills', name: 'Skills', component: Skills, beforeEnter: validateLang },
  {
    path: '/:lang/experience',
    name: 'Experience',
    component: Experience,
    beforeEnter: validateLang,
  },
  { path: '/:lang/contact', name: 'Contact', component: Contact, beforeEnter: validateLang },
  { path: '/:pathMatch(.*)*', name: 'Error404', component: Error404, beforeEnter: validateLang }, // Ruta para 404
]
// Validar idioma y redirigir si no es válido
// Esta función la gestiona Vue internamente
function validateLang(to:RouteLocationNormalized, from: RouteLocationNormalized,  next:NavigationGuardNext) {
  const lang = to.params.lang as string
  const supportedLanguages = ['en', 'es']
  if (!supportedLanguages.includes(lang as string)) {
    return next('/es/about') // Redirigir al idioma por defecto
  }
  next()
}
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

