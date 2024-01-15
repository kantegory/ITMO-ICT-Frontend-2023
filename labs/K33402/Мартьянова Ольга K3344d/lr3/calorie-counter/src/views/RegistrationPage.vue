<script setup>
import RegForm from '@/components/RegForm.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
</script>

<template>
  <NavigationBar />

  <main
    class="light-background"
    :style="{
      '--background-image': `url(${theme.backgroundImage})`,
      '--text-color': `${theme.textColor}`
    }"
  >
    <div class="reg-container">
      <div class="col-lg-6 col-md-8">
        <h2 class="reg-title">Registration</h2>
        <RegForm />
        <div
          class="link-container"
          :style="{
            '--background-color': `${theme.backgroundColor}`,
            '--border-color': `${theme.borderColor}`
          }"
        >
          Already have an account? <router-link to="/auth">Log in</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.light-background {
  height: 100%;
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
