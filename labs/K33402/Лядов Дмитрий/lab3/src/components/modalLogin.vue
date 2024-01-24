<script setup>
import useAuth from '@/composable/useAuth'

const { login, openReg } = useAuth()
</script>
<template>
  <div
    class="modal fade modal-reg"
    id="modal-reg"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit="login">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="color: #4a4a4a">Login</h5>
            <button
              id="btnClose"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>

          <div class="modal-body">
            <label for="emailLogin" style="padding-left: 10px; padding-bottom: 5px; color: #4a4a4a"
              >Email</label
            >
            <input
              style="border-radius: 20px; margin-bottom: 10px"
              type="email"
              class="form-control"
              id="emailLogin"
              name="email"
              autocomplete="on"
            />
            <label
              for="passwordlLogin"
              style="padding-left: 10px; padding-bottom: 5px; color: #4a4a4a"
              >Password</label
            >
            <input
              type="password"
              autocomplete="on"
              class="form-control"
              id="passwordLogin"
              name="password"
              style="padding-top: 5px; margin: auto; margin-top: 10px; border-radius: 20px"
            />

            <div style="padding-top: 15px; padding-left: 10px">
              dont have an account?
              <a @click="openReg" href=""> sign up </a>
            </div>
          </div>

          <div>
            <hr />
            <button type="submit" class="btn-login" id="loginButton">login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-login {
  margin: auto;
  height: 40px;
  display: block;
  background-color: #4a4a4a;
  color: white;
  width: 50%;
  margin-bottom: 15px;
}
</style>
