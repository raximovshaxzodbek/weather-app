<template>
  <div class="grid w-full mx-auto">
    <form
      @submit.prevent="handleSearchCityName"
      class="flex mx-auto col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-11 gap-1"
    >
      <input
        type="text"
        class="form-control fs-4"
        placeholder="Search City Name..."
        name="search"
        v-model="cityName"
      />
      <button type="submit" class="btn btn-primary btn-lg">Search</button>
    </form>
  </div>
</template>

<script lang="ts">
import { useWeatherStore } from '@/stores/weather-store'
const weatherStore = useWeatherStore()
export default {
  name: 'search-box',
  data() {
    return {
      cityName: ''
    }
  },
  methods: {
    handleSearchCityName() {
      weatherStore.searchCityName(this.cityName)
      weatherStore.$state.cityName = this.cityName
      this.cityName = ''
    }
  }
}
</script>
