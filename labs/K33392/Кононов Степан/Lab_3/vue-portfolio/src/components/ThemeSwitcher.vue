<template>
  <div class="bottom-right-container">
    <img class="themeIcon" :class="{ 'dark-theme': currentTheme === 'dark' }" :src="themeIcon" @click="toggleTheme"  width="100" height="100" alt="">
  </div>
</template>

<script>
import ic_sun from "@/images/ic_sun.svg"
import ic_moon_sun from "@/images/ic_moon_sun.svg"
import ic_moon from "@/images/ic_moon.svg"

export default {

  setup() {
    return {
      ic_sun,
      ic_moon_sun,
      ic_moon
    };
  },
  data() {
    return {
      themes: ['light', 'dark', 'auto'],
      currentThemeIndex: 0,
      themeImages: [ic_sun, ic_moon, ic_moon_sun],
      currentTheme: 'light',
    };
  },
  computed: {
    themeIcon() {
      return this.themeImages[this.currentThemeIndex];
    },
  },
  methods: {
    toggleTheme() {
      this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
      this.currentTheme = this.themes[this.currentThemeIndex];
      this.setStoredTheme(this.currentTheme);
      this.setTheme(this.currentTheme);
    },
    setStoredTheme(theme) {
      localStorage.theme = theme;
    },
    setTheme(theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    },
  },
  created() {
    const storedTheme = localStorage.theme;
    this.currentTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.currentThemeIndex = this.themes.indexOf(this.currentTheme);
    this.setTheme(this.currentTheme);
  },
};
</script>

<style scoped>
.bottom-right-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
