<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const props = defineProps({
  ration: {
    type: Object,
    required: true
  }
})

const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
const total =
  props.ration.breakfast + props.ration.lunch + props.ration.dinner + props.ration.snacks
</script>

<template>
  <li
    class="list-group-item"
    :style="{
      '--text-color': `${theme.textColor}`,
      '--background-color': `${theme.backgroundColor}`
    }"
  >
    Date: {{ ration.date }}
    <ul>
      <template v-for="(item, index) in ration" :key="index">
        <template v-if="index !== 'date'">
          <li>{{ index }}: {{ typeof item === 'number' ? item.toFixed(2) : item }}</li>
        </template>
      </template>
    </ul>
    Total: {{ typeof total === 'number' ? total.toFixed(2) : total }} kcal
  </li>
</template>

<style scoped>
.list-group-item {
  background-color: var(--background-color) !important;
  color: var(--text-color) !important;
}
</style>
