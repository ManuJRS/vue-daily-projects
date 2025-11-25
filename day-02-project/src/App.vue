<script setup>
import DailyLayout from './components/DailyLayout.vue';
import ProjectView from './project/ProjectView.vue';
import { ref } from 'vue';
const nun = ref(0)

setInterval(() => {
  nun.value++
}, 1000);

</script>

<template>
  <DailyLayout
  title="Mini proyectos"
  subtitle="Solo para practicar Vue3"
  api-url="">
  <ProjectView/>

</DailyLayout>
</template>
