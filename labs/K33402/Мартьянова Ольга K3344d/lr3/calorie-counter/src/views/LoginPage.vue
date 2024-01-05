<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import LoginForm from '@/components/LoginForm.vue'
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
</script>

<template>
  <div
    class="light-background"
    :style="{
      '--background-image': `url(${theme.backgroundImage})`,
      '--text-color': `${theme.textColor}`
    }"
  >
    <NavigationBar />
    <LoginForm />
  </div>
</template>

<style scoped>
.light-background {
  min-height: 100vh;
}

@media (max-width: 530px) {
  .light-background {
    height: 150vh;
    padding: 0;
  }
}
</style>
