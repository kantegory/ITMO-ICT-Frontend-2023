<template>
  <div :style="{ backgroundImage: theme ? 'url(\'/3uvT.gif\')' : 'url(\'/BUkJ.gif\')' }">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useTheme } from '@/composables/useTheme';
import Header from "@/components/Header.vue";
import {computed} from "vue";
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    Header
  },
  setup() {
    const { isDarkTheme } = useTheme();
    const store = useStore();

    // Вычисляем класс темы для применения к корневому элементу
    const theme = computed(() => isDarkTheme.value);

    return { theme, store };
  }
}
</script>

<style>
.light-theme {
  background-color: #ffffff;
  color: #000000;
}

.dark-theme {
  background-color: #222222;
  color: #ffffff;
}

/* Общие стили */
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Переопределение стилей для каждой темы */
.light-theme .title {
  font-size: 24px;
}

.dark-theme .title {
  font-size: 24px;
}

.light-theme .text {
  font-size: 16px;
}

.dark-theme .text {
  font-size: 16px;
}

.light-theme .button {
  background-image: url('BUkJ.gif');
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.light-theme .button:hover {
  background-color: #0056b3;
}

.dark-theme .button {
  background-image: url('3uvT.gif');
  padding: 10px 20px;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dark-theme .button:hover {
  background-color: #e6e6e6;
}

</style>
