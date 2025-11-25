<script setup>
import {onMounted, computed} from 'vue'
import { useApiGet } from '../composables/useApiGet';
import ProjectPreview from '../components/ProjectPreview.vue';

const API_URL=`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,mxn`
const {data, loading, error, fetchData} = useApiGet(API_URL)

const criptoValue = computed(() => data.value?.bitcoin)

const priceMx = computed(() => criptoValue.value ? criptoValue.value.mxn : null)
const priceUsd = computed(() =>criptoValue.value ? criptoValue.value.usd : null)
const priceEur = computed(() => criptoValue.value ? criptoValue.value.eur: null)
onMounted(()=> {
    fetchData()
})


</script>

<template>
    <ProjectPreview
      title="Precios de bitcoin"
      description="Muestra el precio del bitcoin en USD, MXN y EUR"
      api-name="coingecko"
      api-url="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,mxn"
    />
    <h2 class="card-text"> Bitcoin</h2>
    <p v-if="loading">
        Cargando
    </p>
    <p v-if="error">
        Error
    </p>
    
    <div v-if="criptoValue">
        <p class="card-text mt-4">${{ priceMx.toLocaleString('es-MX') }} MXN</p>
        <p class="card-text mt-2">${{ priceUsd.toLocaleString('en-US') }} USD</p>
        <p class="card-text mt-2">${{ priceEur.toLocaleString('de-DE') }} EUR</p>
    </div>

</template>