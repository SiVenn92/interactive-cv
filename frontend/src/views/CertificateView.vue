<script setup>
import { ref } from 'vue';

// Data diperbarui dengan judul dan nama file yang lebih relevan
const certificates = ref([
  {
    id: 1,
    title: 'Devcode AI Talks #2',
    imageUrl: '@/assets/images/certificates/devcode-ai-2.png',
    pdfUrl: '/sertifikat-devcode-ai-2.pdf',
    description: 'Sertifikat partisipasi dalam webinar "AI Talks #2" yang diselenggarakan oleh Devcode, membahas perkembangan terbaru dalam kecerdasan buatan.'
  },
  {
    id: 2,
    title: 'Devcode AI Talks #1',
    imageUrl: '@/assets/images/certificates/devcode-ai-1.png',
    pdfUrl: '/sertifikat-devcode-ai-1.pdf',
    description: 'Sertifikat partisipasi dalam sesi pertama "AI Talks" oleh Devcode, mengupas dasar-dasar dan penerapan praktis dari machine learning.'
  },
  {
    id: 3,
    title: 'DevTalks: Mastering SQL',
    imageUrl: '@/assets/images/certificates/devtalks-sql.png',
    pdfUrl: '/sertifikat-devtalks-sql.pdf',
    description: 'Menyelesaikan sesi DevTalks yang berfokus pada penguasaan Structured Query Language (SQL) untuk manajemen data yang efektif.'
  },
  {
    id: 4,
    title: 'Technical Workshop: Git & GitHub',
    imageUrl: '@/assets/images/certificates/workshop-git.png',
    pdfUrl: '/sertifikat-workshop-git.pdf',
    description: 'Sertifikat keikutsertaan dalam workshop teknis tentang sistem kontrol versi menggunakan Git dan kolaborasi tim melalui GitHub.'
  },
  {
    id: 5,
    title: 'Uji Kompetensi Keahlian 2023',
    imageUrl: '@/assets/images/certificates/uji-kompetensi-2023.png',
    pdfUrl: '/sertifikat-ku-2023.pdf',
    description: 'Sertifikat kelulusan yang menyatakan telah memenuhi standar kompetensi keahlian yang diujikan pada Juni 2023.'
  },
  {
    id: 6,
    title: 'Vue.js 3 Fundamentals',
    imageUrl: '@/assets/images/certificates/vue-school.png',
    pdfUrl: '/sertifikat-vue-school.pdf',
    description: 'Menyelesaikan kursus mendalam tentang Vue.js, mencakup Composition API, Vue Router, dan Pinia. Diterbitkan oleh Vue School.'
  }
]);
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="container mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">
        Sertifikat & Pencapaian
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="cert in certificates" 
          :key="cert.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
        >
          <a :href="cert.pdfUrl" target="_blank" rel="noopener noreferrer">
            <img :src="cert.imageUrl" :alt="cert.title" class="w-full h-48 object-cover">
          </a>
          
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ cert.title }}
            </h3>
            <p class="text-gray-600 flex-grow">
              {{ cert.description }}
            </p>
            <a 
              :href="cert.pdfUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-teal-600 font-semibold mt-4 inline-block hover:underline self-start"
            >
              Lihat Dokumen PDF &rarr;
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Style Anda tidak perlu diubah */
</style>