import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Experience from '@/components/Experience.vue';
import { compile } from 'vue';
const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
  {path: '/about', component: About},
  {path:'/projects',component: Projects},
  {path: '/experience',component: Experience}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
