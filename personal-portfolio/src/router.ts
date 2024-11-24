import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import About from './views/about.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/aboutme', component: About},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router