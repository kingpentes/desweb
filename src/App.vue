<script setup>
import { ref } from 'vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'

const currentPage = ref('home')

const handleNavigate = (page) => {
  currentPage.value = page
  console.log('Navigating to:', page)
}
</script>

<template>
  <HomePage v-if="currentPage === 'home'" :onNavigate="handleNavigate" />
  <AboutPage v-else-if="currentPage === 'about'" :onNavigate="handleNavigate" />
</template>

<style scoped>
/* Custom styles jika diperlukan */
</style>
