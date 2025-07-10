<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TheSectionTitle from './sectionTitle.vue'; // Menggunakan nama file yang sudah diperbaiki

const skills = ref([]);

onMounted(async () => {
  try {
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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="skill in skills" :key="skill.name" class="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>