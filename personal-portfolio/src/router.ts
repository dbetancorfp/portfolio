import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import About from './views/about.vue';
import Projects from './views/projects.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/aboutme', component: About},
    { path: '/projects', component: Projects},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router