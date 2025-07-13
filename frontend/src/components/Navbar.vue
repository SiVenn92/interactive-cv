<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// State untuk melacak menu mobile (terbuka/tertutup)
const isMenuOpen = ref(false);

const activeSection = ref('');
const sectionIds = ['profil', 'pendidikan', 'skill', 'proyek', 'kontak'];

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  let currentSection = '';

  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (section) {
      if (scrollPosition >= section.offsetTop - 100) {
        currentSection = id;
      }
    }
  }
  
  // PERBAIKAN untuk bug seksi terakhir
  const atBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2;
  if (atBottom) {
    currentSection = sectionIds[sectionIds.length - 1];
  }

  activeSection.value = currentSection;
};

// Fungsi untuk menutup menu saat link di klik (di mobile)
const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="bg-white/70 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 shadow-sm">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">
        <a href="#">Vendri Setyawan</a>
      </div>

      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <ul class="hidden md:flex space-x-6">
        <li><a href="#profil" class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-teal-500" :class="[activeSection === 'profil' ? 'text-teal-500 font-semibold' : 'text-gray-600']">Profil</a></li>
        <li><a href="#pendidikan" class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-teal-500" :class="[activeSection === 'pendidikan' ? 'text-teal-500 font-semibold' : 'text-gray-600']">Pendidikan</a></li>
        <li><a href="#skill" class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-teal-500" :class="[activeSection === 'skill' ? 'text-teal-500 font-semibold' : 'text-gray-600']">Skill</a></li>
        <li><a href="#proyek" class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-teal-500" :class="[activeSection === 'proyek' ? 'text-teal-500 font-semibold' : 'text-gray-600']">Proyek</a></li>
        <li><a href="#kontak" class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-teal-500" :class="[activeSection === 'kontak' ? 'text-teal-500 font-semibold' : 'text-gray-600']">Kontak</a></li>
      </ul>
    </nav>

    <div :class="isMenuOpen ? 'block' : 'hidden'" class="md:hidden bg-white border-t border-gray-200">
      <a @click="closeMenu" href="#profil" class="block py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-teal-500">Profil</a>
      <a @click="closeMenu" href="#pendidikan" class="block py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-teal-500">Pendidikan</a>
      <a @click="closeMenu" href="#skill" class="block py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-teal-500">Skill</a>
      <a @click="closeMenu" href="#proyek" class="block py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-teal-500">Proyek</a>
      <a @click="closeMenu" href="#kontak" class="block py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-teal-500">Kontak</a>
    </div>
  </header>
</template>