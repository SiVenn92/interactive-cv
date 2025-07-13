<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const project = ref(null);

onMounted(async () => {
  const slug = route.params.slug;
  try {
    // Panggil endpoint baru untuk detail proyek
    const response = await axios.get(`http://localhost:3000/api/projects/${slug}`);
    project.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil detail proyek:', error);
  }
});
</script>

<template>
  <div v-if="project" class="bg-white min-h-screen">
    <div class="container mx-auto px-6 py-12 md:py-20">
      <div class="max-w-4xl mx-auto text-center mb-12">
        <router-link to="/#proyek" class="text-teal-600 hover:underline mb-6 inline-block">&larr; Kembali ke Daftar Proyek</router-link>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900">{{ project.title }}</h1>
        <p class="text-lg text-gray-600 mt-4">{{ project.shortDescription }}</p>
        <div class="mt-8 flex justify-center gap-4">
          <a :href="project.liveUrl" target="_blank" class="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors">
            Kunjungi Situs
          </a>
          <a :href="project.githubUrl" target="_blank" class="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors">
            Lihat Kode
          </a>
        </div>
      </div>

      <div class="max-w-5xl mx-auto mb-16">
        <img :src="project.gallery[0] || project.image" alt="Tampilan utama proyek" class="w-full h-auto rounded-lg shadow-2xl">
        </div>
      
      <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Tentang Proyek</h2>
            <p class="text-gray-700 leading-relaxed">{{ project.fullDescription }}</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Peran Saya</h2>
            <p class="text-gray-700 leading-relaxed">{{ project.myRole }}</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Tantangan & Solusi</h2>
            <p class="text-gray-700 leading-relaxed">{{ project.solution }}</p>
          </div>
        </div>
        
        <div class="md:col-span-1 space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Teknologi</h2>
            <ul class="space-y-2">
              <li v-for="tech in project.tech" :key="tech" class="flex items-center">
                <span class="bg-teal-500 w-2 h-2 rounded-full mr-3"></span>
                <span class="text-gray-700">{{ tech }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Fitur Utama</h2>
            <ul class="space-y-2">
              <li v-for="feature in project.features" :key="feature" class="flex items-center">
                <span class="bg-teal-500 w-2 h-2 rounded-full mr-3"></span>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-40">
    <p>Memuat Proyek...</p>
  </div>
</template>