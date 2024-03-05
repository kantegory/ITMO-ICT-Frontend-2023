<script setup>
import useAuth from '@/composable/useAuth'
const { login } = useAuth()
</script>
<template>
  <form @submit="login">
    <div class="modal-body">
      <label for="emailLogin" class="modalLabel">Email</label>
      <input
        type="email"
        class="form-control modalInput"
        id="emailLogin"
        name="email"
        autocomplete="on"
      />

      <label for="passwordlLogin" class="modalLabel">Password</label>
      <input
        type="password"
        autocomplete="on"
        class="form-control modalInput"
        id="passwordLogin"
        name="password"
        style="margin-bottom: 15px"
      />
      <button type="submit" class="btnLogin">login</button>
    </div>
  </form>
</template>
<style scoped>
.btnLogin {
  background-color: #141414;
  color: #00d400;
  font-size: 30px;
  margin-left: 25%;
  width: 50%;
}
.btnLogin:hover {
  color: #046b04;
}
.modalLabel {
  padding-bottom: 5px;
  font-size: 20px;
  color: #00d400;
}
.modalInput {
  padding-top: 5px;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
}
</style>
