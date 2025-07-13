<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './sectionTitle.vue';

// 1. Buat variabel reaktif kosong untuk menampung data dari API
const projects = ref([]);

// 2. Ambil data dari API saat komponen dimuat
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>

<template>
  <div class="container mx-auto px-6" id="proyek">
    <SectionTitle title="Proyek Unggulan" />
    <div class="mt-8 grid md:grid-cols-2 gap-12">
      <div v-for="project in projects" :key="project.slug" class="bg-white p-8 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105">
        <div class="flex-grow">
          <h3 class="text-2xl font-bold text-gray-800">{{ project.title }}</h3>
          <p class="mt-4 text-gray-600">{{ project.shortDescription }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in project.tech" :key="tag" class="text-sm font-semibold bg-teal-500/20 text-teal-700 py-1 px-3 rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>
        <router-link :to="`/proyek/${project.slug}`" class="inline-block mt-6 font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-300">
          Lihat Detail →
        </router-link>
      </div>
    </div>
  </div>
</template>