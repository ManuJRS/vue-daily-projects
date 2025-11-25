<script setup>
import {onMounted, computed} from 'vue'
import { useApiGet } from '../composables/useApiGet';
import ProjectPreview from '../components/ProjectPreview.vue';

//Tuve que buscar la coordenadas pq si no no funcionaba LA API
const LAT = 20.97
const LON = -89.62

const API_URL=`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`
const {data, loading, error, fetchData} = useApiGet(API_URL)

const currentWeather = computed(() => data.value?.current_weather || null)
const temperature = computed(() =>  currentWeather.value ? currentWeather.value.temperature : null)
const windspeed = computed(()=> currentWeather.value ? currentWeather.value.windspeed : null)
//const weatherTime = computed(() => currentWeather.value ? currentWeather.value.time : null)


//asi se le da formato usando js
const weatherTime = computed(() => {
    const correctFormat = new Date(currentWeather.value.time)
    return correctFormat.toLocaleString('es-MS', {
        dateStyle: 'medium',
        timeStyle: 'short'
    })
})

onMounted(()=> {
    fetchData()
})


</script>

<template>
    <ProjectPreview
      title="Weather Widget"
      description="Muestra el clima actual en Mérida usando la API de Open-Meteo."
      api-name="Open-Meteo"
      api-url="https://open-meteo.com/en/docs"
    />
    
    <div class="text-center">
        <button class="btn" @click="fetchData">
            Refresh
        </button>
    </div>

        <p v-if="loading" class="card-text mt-4">
        Cargando el clima 🌞
        </p>
        <p v-else-if="error" class="card-text mt-4">
        {{ error }}
        </p>

        <div class="mt-4" v-else-if="temperature !== null">
            <h3 class="card-text">Clima actual en Merida</h3>
            <p class="card-text mt-2">
                Temperatura: {{ temperature }}
            </p>
            <p class="card-text mt-2">
                Viento: {{ windspeed }}
            </p>
            <p class="card-text mt-2">
                Actualizado: {{ weatherTime }}
            </p>
        </div>
</template>