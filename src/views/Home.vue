<template>
  <main class="w-full min-h-[calc(100vh-90px)] flex justify-center items-center flex-col gap-3">
    <h1 class="fs-1 font-bold text-white">Weather Application</h1>
    <search-box />
    <current-date-weather />
  </main>
</template>

<script lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import CurrentDateWeather from '@/components/CurrentDateWeather.vue'
export default {
  name: 'home',
  components: { SearchBox, CurrentDateWeather }
}
</script>
