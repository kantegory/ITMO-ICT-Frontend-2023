<template>
  <div :class="{ 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; // Подключаем компонент заголовка
import { useTheme } from '../composables/useTheme'; // Импортируем хук для работы с темой

export default {
  name: 'BaseLayout',
  components: {
    Header, // Регистрируем компонент заголовка
  },
  setup() {
    const { isDarkTheme } = useTheme(); // Получаем состояние темы
    return { isDarkTheme }; // Возвращаем состояние темы для использования в шаблоне
  },
};
</script>

<style scoped>
/* Стили для базового компонента */
.light-theme {
  background-color: #ffffff; /* Светлый фон */
  color: #333333; /* Цвет текста для светлой темы */
}

.dark-theme {
  background-color: #333333; /* Темный фон */
  color: #ffffff; /* Цвет текста для темной темы */
}

/* Общие стили для всех страниц */
main {
  padding: 20px;
}
</style>