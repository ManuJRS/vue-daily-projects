<!-- src/components/ProjectPreview.vue -->
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Daily Project'
  },
  description: {
    type: String,
    default: ''
  },
  apiName: {
    type: String,
    default: ''
  },
  apiUrl: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="preview">
    <h2 class="preview-title">{{ title }}</h2>

    <p v-if="description" class="preview-description">
      {{ description }}
    </p>

    <p v-if="apiName" class="preview-api">
      API usada:
      <a
        v-if="apiUrl"
        :href="apiUrl"
        target="_blank"
        rel="noreferrer"
        class="preview-link"
      >
        {{ apiName }}
      </a>
      <span v-else>
        {{ apiName }}
      </span>
    </p>
  </section>
</template>

<style scoped>
.preview {
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.5); /* slate-400 */
}

.preview-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.preview-description {
  font-size: 0.9rem;
  color: #d1d5db; /* gray-300 */
  margin-bottom: 0.35rem;
}

.preview-api {
  font-size: 0.8rem;
  color: #9ca3af; /* gray-400 */
}

.preview-link {
  color: #38bdf8; /* sky-400-ish */
  text-decoration: none;
  font-weight: 500;
}

.preview-link:hover {
  text-decoration: underline;
}
</style>
