import { ref, watch } from 'vue';

export function useTheme() {
    const isDarkTheme = ref(localStorage.getItem('isDarkTheme') === 'true');

    function toggleTheme() {
        isDarkTheme.value = !isDarkTheme.value;
        localStorage.setItem('isDarkTheme', isDarkTheme.value.toString());
    }

    // Добавляем слежение за изменением значения isDarkTheme
    watch(isDarkTheme, (newValue, oldValue) => {
        applyTheme(newValue);
    });

    function applyTheme(isDark) {
        const themeClass = isDark ? 'dark-theme' : 'light-theme';
        const oppositeThemeClass = isDark ? 'light-theme' : 'dark-theme';

        // Устанавливаем новую тему на body
        document.body.classList.add(themeClass);
        document.body.classList.remove(oppositeThemeClass);

        // Добавляем класс с анимацией для плавной смены темы
        document.body.classList.add('theme-transition');

        // Удаляем класс с анимацией после завершения перехода
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 1000); // Время анимации в миллисекундах
    }

    applyTheme(isDarkTheme.value); // Применяем текущую тему

    return { isDarkTheme, toggleTheme };
}