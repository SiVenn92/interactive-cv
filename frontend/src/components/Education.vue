<script setup>
import SectionTitle from './sectionTitle.vue';

// Anda bisa menambahkan logika untuk mengambil data pendidikan dari API di sini jika perlu
const educationHistory = [
  {
    year: '2022 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    year: '2019 - 2022',
    institution: 'SMK WONGSOREJO GOMBONG',
    major: 'Teknik Permesinan'
  }
];
</script>

<template>
  <div class="container mx-auto px-6">
    <SectionTitle title="Riwayat Pendidikan" />
    <div class="mt-8 max-w-3xl mx-auto">
      <div v-for="(edu, index) in educationHistory" :key="edu.institution" class="relative pl-8 sm:pl-32 py-6 group">
        <div class="font-bold text-indigo-600 sm:absolute sm:left-0 sm:top-9 sm:transform-none sm:text-right w-28">{{ edu.year }}</div>
        <div class="absolute top-5 left-0 h-full w-px bg-gray-300 sm:left-28"></div>
        <div class="absolute top-5 left-[-4px] h-3 w-3 rounded-full bg-indigo-600 sm:left-[108px]"></div>
        <div class="ml-4">
          <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
          <p class="mt-1 text-gray-500">{{ edu.major }}</p>
        </div>
      </div>
    </div>
  </div>
</template>