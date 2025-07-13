<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './sectionTitle.vue';

// Buat variabel reaktif untuk menampung data dari API
const educationHistory = ref([]);

// Ambil data dari API saat komponen dimuat
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error);
  }
});
</script>

<template>
  <div class="container mx-auto px-6">
    <SectionTitle title="Riwayat Pendidikan" />
    <div class="mt-8 max-w-3xl mx-auto">
      <div v-for="edu in educationHistory" :key="edu.id" class="relative pl-8 sm:pl-32 py-6 group">
        <div class="font-bold text-teal-500 sm:absolute sm:left-0 sm:top-9 sm:transform-none sm:text-right w-28">{{ edu.period }}</div>
        
        <div class="absolute top-5 left-0 h-full w-px bg-gray-300 sm:left-28"></div>
        <div class="absolute top-5 left-[-4px] h-3 w-3 rounded-full bg-teal-500 sm:left-[108px]"></div>
        
        <div class="ml-4">
          <a
            :href="edu.mapUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl font-bold text-gray-800 hover:text-teal-600 hover:underline transition-colors duration-300"
          >
            {{ edu.institution }}
          </a>
          <p class="mt-1 text-gray-500">{{ edu.major }}</p>
        </div>
      </div>
    </div>
  </div>
</template>