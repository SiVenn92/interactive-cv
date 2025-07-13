<script setup>
import SectionTitle from './sectionTitle.vue';
import { ref } from 'vue';

// Ganti dengan data proyek Anda, bisa juga dari API
const projects = ref([
  {
    title: 'Website Toko Online',
    description: 'Aplikasi e-commerce dengan fitur keranjang belanja.',
    link: '#',
    tags: ['Vue.js', 'Express.js', 'PostgreSQL']
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    link: '#',
    tags: ['React', 'Firebase']
  }
]);
</script>

<template>
  <div class="container mx-auto px-6">
    <SectionTitle title="Proyek Unggulan" />
    <div class="mt-8 grid md:grid-cols-2 gap-12">
      <div v-for="project in projects" :key="project.title" class="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h3 class="text-2xl font-bold text-gray-800">{{ project.title }}</h3>
        <p class="mt-4 text-gray-600">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tag in project.tags" :key="tag" class="text-sm bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">
            {{ tag }}
          </span>
        </div>
        <a :href="project.link" class="inline-block mt-6 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
          Lihat Detail →
        </a>
      </div>
    </div>
  </div>
</template>