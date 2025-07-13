<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TheSectionTitle from './sectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    // Pengambilan data dari API sudah benar
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data skills:', error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <TheSectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        
        <router-link 
          v-for="skill in skills" 
          :key="skill.slug" 
          :to="`/skill/${skill.slug}`"
          class="bg-white p-6 rounded-lg shadow-lg text-center block transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </router-link>

      </div>
    </div>
  </section>
  </template>