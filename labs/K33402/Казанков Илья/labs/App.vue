<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isDarkMode() {
      return this.$store.state.theme ? this.$store.state.theme.darkMode : false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.dark-mode {
  background-color: #333;
  color: #fff; 
}
</style>
