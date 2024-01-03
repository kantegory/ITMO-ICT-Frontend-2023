<script setup>
import {signinUser} from "@/auth_script";
import router from "@/router";

async function signIn() {
  const ans = await signinUser();
  if (!ans) {
    await router.push('/auth');
  } else {
    await router.push('/account');
  }
}
</script>

<template>
  <form id="signinForm" class="card col-5 my-3 mx-3 card-body">
    <h5 class="card-title text-center">Sign in</h5>
    <label class="form-label" for="email-in">Email:</label>
    <input type="text" name="login" id="email-in" placeholder="Email..." class="form-control mb-1">
    <label class="form-label" for="password-in">Password:</label>
    <input type="password" name="password" id="password-in" placeholder="Password..." class="form-control mb-1">
    <router-link @click="signIn" type="submit" class="btn btn-primary form-control my-1" to="">Sign in
    </router-link>
  </form>
</template>

<style scoped>

</style>