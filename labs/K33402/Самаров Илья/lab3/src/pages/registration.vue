<script setup>
import useApi from '@/composable/useApi'

const { registerApi } = useApi()
</script>

<template>
  <div class="container-fluid register">
    <h1 style="padding-top: 75px">Welcome to the registration page!<br /></h1>
    <h4 style="padding-bottom: 30px">
      <br />Thanks for using my website, I hope you enjoy my services and we can cooperate!
    </h4>
    <hr />
    <form @submit="registerApi">
      <div class="d-flex flex-column justify-content-center border-right" style="padding-left: 33%">
        <div class="d-flex flex-column RegObj">
          <label for="regusername">Username</label>
          <input
            type="text"
            name="id"
            id="regusername"
            style="width: 25%; min-width: 150px"
            autocomplete="off"
            required
          />
        </div>
        <div class="d-flex flex-column RegObj">
          <label for="regemail">Email</label>
          <input
            type="email"
            name="email"
            id="regemail"
            style="width: 25%; min-width: 150px"
            autocomplete="on"
            required
          />
        </div>
        <div class="d-flex flex-column RegObj">
          <label for="regpass">Password</label>
          <input
            type="password"
            name="password"
            id="regpass"
            style="width: 25%; min-width: 150px"
            autocomplete="on"
            required
          />
        </div>
        <button type="submit" class="regbtn">Register</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.RegObj {
  padding-top: 1.5%;
}

.regbtn {
  width: 25%;
  min-width: 150px;
  margin-top: 5%;
  background-color: #02011e;
  color: #8738f8;
}
.register {
  height: 100vh;
  padding-left: 10%;
}
</style>
