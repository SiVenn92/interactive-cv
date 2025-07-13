<script setup>
import SectionTitle from './sectionTitle.vue';
</script>

<template>
  <section id="kontak" class="py-20">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
        Jangan ragu untuk terhubung atau bertanya. Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru.
      </p>

      <div class="mt-8">
        <a href="mailto:vendrisetyawan1@students.amikom.ac.id" class="inline-block bg-teal-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-500 transition-colors duration-300">
          Kirim Email
        </a>
      </div>

      <div class="mt-12">
        <p class="text-slate-500 mb-4">Atau temukan saya di media sosial:</p>
        <div class="flex justify-center items-center space-x-6 md:space-x-8">

          <a 
            href="https://www.instagram.com/vndr_29?igsh=bWJ1a3BidW4xeTZk" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Instagram"
            class="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-110"
          >
            <img src="@/assets/icons/instagram.svg" alt="Instagram" class="w-8 h-8">
          </a>
          
          <a 
            href="https://wa.me/6285961435898" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="WhatsApp"
            class="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-110"
          >
            <img src="@/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-8 h-8">
          </a>

          <a 
            href="https://github.com/SiVenn92" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
            class="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-110"
          >
            <img src="@/assets/icons/github.svg" alt="GitHub" class="w-8 h-8">
          </a>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styling tambahan bisa diletakkan di sini jika diperlukan */
</style>