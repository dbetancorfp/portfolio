import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
  {path: '/about', component: About},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
