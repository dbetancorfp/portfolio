import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue"
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Error404 from "./components/Error404.vue";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/projects", component: Projects },
    { path: "/skills", component: Skills },
    { path: "/experience", component: Experience },
    { path: "/contact", component: Contact },
    { path: "/:pathMatch(.*)*", component: Error404 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;