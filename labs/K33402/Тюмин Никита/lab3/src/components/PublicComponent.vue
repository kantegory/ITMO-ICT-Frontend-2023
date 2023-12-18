<template>
  <router-view/>
</template>

<script>
export default {
  name: "PublicComponent"
}
</script>

<style>
.__container {
  margin-top: 10%;
  max-width: 30%;
}
.__submit_button {
  background-color: var(--header-color);
  color: var(--bg-color);
}
.__buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>