import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Experience from '../components/Experience.vue';
import Contact from '../components/Contact.vue';

const routes = [
    { path: '/', redirect: '/about' },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/skills', name: 'Skills', component: Skills },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
