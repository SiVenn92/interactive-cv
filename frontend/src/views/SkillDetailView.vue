<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const skill = ref(null);

onMounted(async () => {
  const slug = route.params.slug;
  try {
    const response = await axios.get(`http://localhost:3000/api/skills/${slug}`);
    skill.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil detail skill:', error);
  }
});
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div v-if="skill" class="container mx-auto px-6 py-20">
        <router-link to="/#skill" class="text-teal-500 hover:underline mb-8 inline-block">&larr; Kembali ke Daftar Keahlian</router-link>
        
        <div class="text-center mb-12">
            <h1 class="text-5xl font-bold text-gray-800">{{ skill.name }}</h1>
            <p class="text-xl text-gray-500 mt-2">{{ skill.level }}</p>
        </div>

        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Deskripsi</h2>
            <p class="text-gray-700 leading-relaxed">{{ skill.description }}</p>

            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 mt-8 mb-4">Contoh Implementasi Proyek</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li v-for="project in skill.projects" :key="project">
                    {{ project }}
                </li>
            </ul>
        </div>
    </div>
    <div v-else class="text-center py-20">
        <p class="text-lg text-gray-500">Memuat...</p>
    </div>
  </div>
</template>