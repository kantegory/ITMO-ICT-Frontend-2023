<script setup>
import useApi from '@/composable/useApi'
const { registerApi } = useApi()
</script>
<template>
  <form @submit="registerApi">
    <div class="modal-body">
      <label for="regemail" class="modalLabel">Email</label>
      <input
        type="email"
        name="email"
        id="regemail"
        autocomplete="on"
        required
        class="form-control modalInput"
      />

      <label for="regpass" class="modalLabel">Password</label>
      <input
        type="password"
        name="password"
        id="regpass"
        autocomplete="on"
        required
        class="form-control modalInput"
        style="margin-bottom: 15px"
      />
      <label for="regusername" class="modalLabel">Username</label>
      <input
        type="text"
        name="id"
        id="regusername"
        autocomplete="off"
        required
        class="form-control modalInput"
      />
      <hr style="color: white" />
      <button type="submit" class="btnLogin">registration</button>
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
