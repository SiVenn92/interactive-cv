// File: src/views/HomeView.vue

<template>
  <div>
    <main>
      <section id="profil">
        <Hero />
      </section>

      <section id="pendidikan" v-animate-on-scroll>
        <Education />
      </section>
      
      <Skills />
      
      <section id="proyek" v-animate-on-scroll>
        <Projects />
      </section>
      
      <section id="kontak" v-animate-on-scroll>
        <Contact />
      </section>
    </main>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue'; // <--  IMPORT INI DI-AKTIFKAN KEMBALI
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>

<style scoped>
/* Pastikan style ini ada untuk jarak saat navigasi */
section {
  scroll-margin-top: 80px; 
}
</style>