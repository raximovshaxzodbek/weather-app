<template>
  <div class="w-full px-4">
    <div v-if="!isLoading" class="w-full h-[200px] flex justify-center items-center text-white">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="w-full">
      <div class="flex items-center gap-2 my-3 text-white">
        <h1 class="text-5xl font-bold">{{ name }}</h1>
        <h3 class="text-3xl font-semibold">
          {{ country }}
        </h3>
      </div>
      <div class="w-full flex md:flex-row flex-col items-center justify-center text-white">
        <div
          class="md:w-1/3 w-full min-h-[100px] border border-white rounded-lg shadow-lg shadow-white flex justify-center items-center flex-col gap-3"
        >
          <h2 class="text-4xl font-semibold">main</h2>
          <h3 class="text-3xl font-semibold">{{ weatherMain }}</h3>
        </div>
        <div
          class="md:w-1/3 w-full min-h-[100px] border border-white rounded-lg shadow-lg shadow-white flex justify-center items-center flex-col gap-3"
        >
          <h3 class="text-3xl font-semibold">Humidity</h3>
          <h4 class="text-2lx font-semibold">{{ humidity }}%</h4>
        </div>
        <div
          class="md:w-1/3 w-full min-h-[100px] border border-white rounded-lg shadow-lg shadow-white flex justify-center items-center flex-col gap-3"
        >
          <h3 class="text-3xl font-semibold">Temperatura</h3>
          <h4 class="text-2lx font-semibold">{{ Math.floor(temp) }}%</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useWeatherStore } from '@/stores/weather-store'
import axios from 'axios'
const weatherStore = useWeatherStore()
export default {
  name: 'current-date-weather',
  data() {
    return {
      isLoading: false,
      name: '',
      weatherMain: '',
      weatherDescription: '',
      country: '',
      humidity: 0,
      temp: 0
    }
  },
  methods: {
    async initialHuntingAir() {
      const response = await axios.get(weatherStore.weatherUrl)
      console.log(response.data)
      this.name = response.data.name
      this.weatherMain = response.data.weather[0].main
      this.weatherDescription = response.data.weather[0].description
      this.country = response.data.sys.country
      this.temp = response.data.main.temp - 272.15
      this.isLoading = true
    }
  },
  mounted() {
    this.initialHuntingAir()
  }
}
</script>
