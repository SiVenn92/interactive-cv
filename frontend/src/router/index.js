// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SkillDetailView from '../views/SkillDetailView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';
import CertificateView from '../views/CertificateView.vue'; // 1. IMPORT HALAMAN BARU

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sertifikat', // 2. TAMBAHKAN RUTE BARU DI SINI
      name: 'sertifikat',
      component: CertificateView
    },
    // Route untuk detail keahlian (tetap ada)
    {
      path: '/skill/:slug',
      name: 'skill-detail',
      component: SkillDetailView
    },
    // Route untuk detail proyek (tetap ada)
    {
      path: '/proyek/:slug',
      name: 'project-detail',
      component: ProjectDetailView
    }
  ],
  // scrollBehavior Anda tidak perlu diubah, biarkan seperti ini
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