<script setup>
import { ref } from 'vue';

// Ini adalah "state" untuk mengontrol apakah modal terlihat atau tidak.
// Awalnya diatur ke false (tersembunyi).
const isModalVisible = ref(false);

// Fungsi untuk menampilkan modal
const openModal = () => {
  isModalVisible.value = true;
};

// Fungsi untuk menyembunyikan modal
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-in-left" style="animation-delay: 200ms;">
        Halo, Saya <span class="text-teal-500">Vendri Setyawan</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 mb-8 animate-slide-in-left" style="animation-delay: 400ms;">
        Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan UI UX designer.
      </p>
      <a href="#kontak" class="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 inline-block animate-slide-in-left" style="animation-delay: 600ms;">
        Hubungi Saya
      </a>
    </div>
    
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img 
        src="https://i.imgur.com/ANOMpnX.jpeg" 
        alt="Foto Profil" 
        class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        @click="openModal"
      >
    </div>
  </section>

  <div 
    v-if="isModalVisible" 
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
    @click="closeModal"
  >
    <div class="relative bg-white p-4 rounded-lg shadow-xl" @click.stop>
      <img 
        src="https://i.imgur.com/ANOMpnX.jpeg" 
        alt="Foto Profil Diperbesar" 
        class="max-w-[80vw] max-h-[80vh] rounded"
      >
      <button 
        @click="closeModal" 
        class="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full text-black text-xl font-bold flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Anda bisa membiarkan bagian ini kosong karena kita menggunakan Tailwind CSS. */
/* Animasi slide-in-left dan slide-in-right Anda kemungkinan sudah didefinisikan di file CSS global (seperti main.css), jadi akan tetap berfungsi. */
</style>