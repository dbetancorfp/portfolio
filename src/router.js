import { createRouter, createWebHistory } from 'vue-router'

import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Error404 from './components/Error404.vue'

const routes = [
    { path: "/", redirect: "/about" },
    { path: "/about", component: About },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact },
    { path: "/skills", component: Skills },
    { path: "/experience", component: Experience },
    { path: "/error404", component: Error404 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router