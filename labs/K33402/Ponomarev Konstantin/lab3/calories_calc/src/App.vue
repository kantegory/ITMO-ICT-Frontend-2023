<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import {watchEffect} from "vue";
import {useSiteThemeStore} from "@/stores/siteThemeStore";

const themeStore = useSiteThemeStore();

watchEffect(() => {
  document.body.setAttribute('data-bs-theme', themeStore.currentTheme);
});
</script>
