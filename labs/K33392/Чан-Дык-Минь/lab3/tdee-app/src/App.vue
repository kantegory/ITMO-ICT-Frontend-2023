<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DarkMode from './components/DarkMode.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/nutrition">Nutrition</RouterLink>
        <RouterLink to="/login">Log in</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/history">History</RouterLink>
        <DarkMode />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style >

html.dark {
  color-scheme: dark;
  
}

html.dark nav a.router-link-exact-active {
  color: rgb(187, 187, 187);
}

header {
  line-height: 1.5;
  max-height: 100vh;

  display: flex;
  justify-content: right;
  align-items: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  
  /* background-color: blueviolet; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

h1 {
  color: hsla(160, 100%, 37%, 1);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin: .5rem 0;
  }
}
</style>
