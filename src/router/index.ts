import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Proyectos from '../views/Proyectos.vue'
import Contacto from '../views/Contacto.vue'
import Habilidades from '../views/Habilidades.vue'
import Experiencia from '../views/Experiencia.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Proyectos,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto,
    },
    {
      path: '/habilidades',
      name: 'habilidades',
      component: Habilidades,
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component: Experiencia,
    },
  ],
})

export default router
