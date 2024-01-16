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
  background-color: #FAF0E6;
  color: #352F44;
}
.__buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>