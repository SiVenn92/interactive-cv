// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// Import komponen view untuk halaman detail
import SkillDetailView from '../views/SkillDetailView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Route untuk detail keahlian
    {
      path: '/skill/:slug',
      name: 'skill-detail',
      component: SkillDetailView
    },
    // Route untuk detail proyek
    {
      path: '/proyek/:slug',
      name: 'project-detail',
      component: ProjectDetailView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 70, 
      };
    }
    return { top: 0 };
  }
});

export default router;