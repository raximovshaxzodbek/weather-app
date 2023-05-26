import axios from 'axios'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather-store', {
  state() {
    return {
      weatherKey: 'f99721859fa39ae3332683ae0a9291aa',
      cityName: '',
      weatherUrl:
        'https://api.openweathermap.org/data/2.5/weather?q=fergana&appid=f99721859fa39ae3332683ae0a9291aa'
    }
  },
  actions: {
    async searchCityName(cityName: String) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.weatherKey}`
      )
      console.log(response.data)
    }
  }
})
