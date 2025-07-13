<script setup>
import { RouterView } from 'vue-router';
// Import Navbar di sini agar bisa digunakan di template
import Navbar from './components/Navbar.vue'; 
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <!-- Navbar diletakkan di sini, di luar RouterView -->
    <Navbar />
    
    <!-- RouterView akan merender halaman sesuai URL, misal: Halaman Home -->
    <RouterView />
  </div>
</template>