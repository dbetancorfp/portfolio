// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Aboutme from './components/Aboutme.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';

const routes = [
  { path: '/', redirect: "/projects" },        
  { path: '/about', component: Aboutme },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: "/experience", component: Experience},
  { path: "/contact", component: Contact},
]

const router = createRouter({
  history: createWebHistory(), 
  routes, 
})

export default router
