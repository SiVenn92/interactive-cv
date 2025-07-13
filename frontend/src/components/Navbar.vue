<template>
  <header class="bg-white/10 backdrop-blur-lg sticky top-0 z-50 animate-fade-in transition-all duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">
        <a href="#">Vendri Setyawan</a>
      </div>
      <ul class="flex space-x-6">
        <li>
          <a
            href="#profil"
            class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-blue-500"
            :class="[activeSection === 'profil' ? 'text-blue-500 font-semibold' : 'text-gray-600']"
            >Profil</a
          >
        </li>
        <li>
          <a
            href="#pendidikan"
            class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-blue-500"
            :class="[activeSection === 'pendidikan' ? 'text-blue-500 font-semibold' : 'text-gray-600']"
            >Pendidikan</a
          >
        </li>
        <li>
          <a
            href="#skill"
            class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-blue-500"
            :class="[activeSection === 'skill' ? 'text-blue-500 font-semibold' : 'text-gray-600']"
            >Skill</a
          >
        </li>
        <li>
          <a
            href="#proyek"
            class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-blue-500"
            :class="[activeSection === 'proyek' ? 'text-blue-500 font-semibold' : 'text-gray-600']"
            >Proyek</a
          >
        </li>
        <li>
          <a
            href="#kontak"
            class="transform hover:-translate-y-0.5 transition-all duration-300 hover:text-blue-500"
            :class="[activeSection === 'kontak' ? 'text-blue-500 font-semibold' : 'text-gray-600']"
            >Kontak</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Membuat state reaktif untuk melacak section yang sedang aktif
const activeSection = ref('');

// Daftar ID section yang akan dilacak
// Pastikan ID ini sama dengan ID pada tag <section> di App.vue atau halaman utama Anda
const sectionIds = ['profil', 'pendidikan', 'skill', 'proyek', 'kontak'];

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  let currentSection = '';

  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (section) {
      // Offset 100px agar link aktif sedikit lebih awal sebelum section mencapai puncak
      if (scrollPosition >= section.offsetTop - 100) {
        currentSection = id;
      }
    }
  }
  activeSection.value = currentSection;
};

// Menambahkan event listener saat komponen di-mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Panggil sekali saat load untuk set state awal
  handleScroll(); 
});

// Menghapus event listener untuk mencegah memory leak saat komponen di-unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>