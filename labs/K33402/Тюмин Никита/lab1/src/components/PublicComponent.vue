<template>
  <router-view/>
</template>

<script>
export default {
  name: "PublicComponent"
}
</script>

<style>
.form-container {
  margin-top: 10%;
  max-width: 30%;
}
.form-container__buttons__submit_button {
  background-color: #FAF0E6;
  color: #352F44;
}
.form-container__buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>