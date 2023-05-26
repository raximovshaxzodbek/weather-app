<template>
  <div>
    <h1>Weather Date</h1>
  </div>
</template>

<script lang="ts">
import { useWeatherStore } from '@/stores/weather-store'
import axios from 'axios'
const weatherStore = useWeatherStore()
export default {
  name: 'current-date-weather',
  methods: {
    async getCurrentDateWeatherData() {
      const response = await axios.get(weatherStore.$state.weatherUrl)
      console.log(response.data)
    }
  },
  mounted() {
    this.getCurrentDateWeatherData()
  },
  updated() {
    this.getCurrentDateWeatherData()
  }
}
</script>
