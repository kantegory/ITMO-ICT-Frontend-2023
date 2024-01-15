<script setup>
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
</script>

<template>
  <div
    class="card account-card"
    :style="{
      '--background-color': `${theme.backgroundColor}`,
      '--border-color': `${theme.borderColor}`
    }"
  >
    <h5 class="card-header">{{ title }}</h5>
    <div class="account-card-body">
      <p class="card-text" v-for="(item, index) in data" :key="index">{{ index }}: {{ item }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--background-color) !important;
  margin-bottom: 10px;
  color: var(--text-color) !important;
}

.card-text {
  margin-right: 10px;
}

.header {
  padding-top: 6px;
}

.account-card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.75rem 1.25rem;
}

.account-card {
  margin: 15px;
}

@media (max-width: 425px) {
  .card-text {
    margin: 7px 0;
  }

  .card-header {
    padding: 12px;
  }
}
</style>
