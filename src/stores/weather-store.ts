import axios from 'axios'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather-store', {
  state() {
    return {
      weatherKey: 'f99721859fa39ae3332683ae0a9291aa',
      cityName: '',
      name: '',
      weatherMain: '',
      weatherDescription: '',
      isLoading: false,
      country: '',
      temp: 0,
      weatherUrl:
        'https://api.openweathermap.org/data/2.5/weather?q=fergana&appid=f99721859fa39ae3332683ae0a9291aa'
    }
  }
})
