<template>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>
#app {
  min-height: 100vh;
  background-color: var(--bg-color);
}
html {
  background-color: var(--bg-color);
}
body {
  overflow: auto;
}
button  {
  border: none;
  background-color: transparent;
}
h2 {
  color: var(--header-color);
}
h5, h4 {
  color: var(--header-color);
  margin-bottom: 0;
  margin-top: 0.5rem;
}
p {
  color: var(--text-color);
}
label {
  color: var(--header-color);
}
a {
  color: var(--text-color);
  text-decoration: none;
}
input {
  background-color: var(--header-color) !important;
}
</style>
