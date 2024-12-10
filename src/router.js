import { createRouter, createWebHistory } from 'vue-router';
import SobreMi from './components/SobreMi.vue';
import Proyectos from './components/Proyectos.vue';
import Habilidades from './components/Habilidades.vue';
import Experiencia from './components/Experiencias.vue';
import Contacto from './components/Contacto.vue';

const routes = [
  { path: '/', redirect: '/sobremi' },
  { path: '/sobremi', component: SobreMi },
  { path: '/proyectos', component: Proyectos },
  { path: '/habilidades', component: Habilidades },
  { path: '/experiencia', component: Experiencia },
  { path: '/contacto', component: Contacto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;