<script setup>
const props = defineProps({
    title:{
        type: String,
        default: 'Proyecyos diarios'
    },
    subtitle:{ 
        type: String,
        default: 'Proyecto de prueba'
    },
    apiUrl: {
       type: String,
        default: 'www.api.com'
    }
})
</script>

<template>
    <main class="layout-main">
        <div class="layout-container">
            <header class="layout-header">
                <h1 v-if="title" class="layout-title">{{ title }}</h1>
                <p v-if="subtitle" class="layout-subtitle">{{ subtitle }}</p>
                <p v-if="apiUrl" class="layout-api">{{ apiUrl }}</p>
            </header>
            <section class="layout-card">
<slot/>
            </section>
            <footer class="layout-footer">
                Construido con vue 3
            </footer>
        </div>
    </main>
</template>