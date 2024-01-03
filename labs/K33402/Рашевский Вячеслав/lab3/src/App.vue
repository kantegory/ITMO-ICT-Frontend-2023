<template>
  <navigation-view/>
  <router-view/>
</template>

<style>
.dark body {
  background-color: #222;
}

.dark .card, .dark span {
  background-color: #222;
  color: #fff;
  border-color: #fff;
}

.dark .card ul, .dark .card li, .dark .card ul li {
  background-color: #222;
  color: #fff;
  border-color: #fff;
}

.dark .navbar * {
  background-color: #222;
  color: #fff;
  border-color: #fff;
}

.dark .navbar input.form-control {
  background-color: #fff;
  color: #fff;
  border-color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import NavigationView from "@/components/NavigationComponent.vue";
</script>
