import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/Experiencia',
    name: 'Experiencia',
    component: () => import('../views/ExperienciaView.vue')
  },
  {
    path: '/Proyecto',
    name: 'Proyecto',
    component: () => import('../views/ProyectoView.vue')
  },
  {
    path: '/Habilidades',
    name: 'Habilidades',
    component: () => import('../views/Habilidades.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
