<template>
  <div class="w-full min-h-screen app">
    <div class="w-full min-h-screen bg-black/40">
      <navbar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: { Navbar }
}
</script>

<style scoped>
.app {
  background: url('./assets/images/weather-bg.jpg') no-repeat center;
  background-size: cover;
}
</style>
