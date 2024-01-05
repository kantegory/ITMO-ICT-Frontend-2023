<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import { useThemeStore } from '@/stores/theme'
import { computed, onBeforeMount } from 'vue'
import { useUserStore } from '@/stores/user'
import darkImg from '/dark-background.png'
import lightImg from '/light-background.png'
import CreateRationForm from '@/components/CreateRationForm.vue'

const themeStore = useThemeStore()
const userStore = useUserStore()
onBeforeMount(async () => {
  await userStore.fetch()
})
const theme = computed(themeStore.getThemeData)
</script>

<template>
  <div
    class="light-background"
    :style="{
      'background-image': `url(${themeStore.currentTheme === 'light' ? lightImg : darkImg})`,
      '--text-color': `${theme.textColor}`
    }"
  >
    <NavigationBar />

    <div class="reg-container">
      <div class="col-lg-6 col-md-8">
        <h2 class="reg-title">Create Ration??</h2>
        <CreateRationForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
.light-background {
  height: 100vh;
}

.dark-background {
  height: 100vh;
}

.reg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5%;
  color: var(--text-color);
}

.link-container {
  border: 1px solid #8f241341;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 10px;
  margin: 15px 0px;
}

.reg-title {
  margin-top: 10px;
  color: var(--text-color);
}

@media (max-width: 425px) {
  .light-background {
    min-width: auto;
    min-height: auto;
  }
}

@media (min-height: 960px) {
  .light-background {
    height: 100vh;
  }
}
</style>
